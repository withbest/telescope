import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import { join, dirname, relative } from 'path';
import {
    importNamespace,
    GenericParseContext,
    createStargateClient,
    createStargateClientOptions,
    createStargateClientProtoRegistry,
    createStargateClientAminoRegistry,
    createGetTxRpc
} from '@cosmology/ast';
import { ProtoRef } from '@cosmology/types';
import { camel, pascal } from 'case';
import { duplicateImportPathsWithExt, variableSlug, toPosixPath } from '@cosmology/utils';
import { buildAllImportsFromGenericContext } from '../imports';
import { writeAstToFile } from '../utils/files';
import { BundlerFile } from '../types';

export const plugin = (
    builder: TelescopeBuilder,
    allRegistries: BundlerFile[],
    allConverters: BundlerFile[]
) => {

    if (!allRegistries || !allRegistries.length) {
        return;
    }

    const registryImports = [];
    const converterImports = [];

    const clientFile = 'all-module-client.ts'
    builder.files.push(clientFile);
    const ctxRef: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: null,
            root: {},
        }
    };
    const ctx = new GenericParseContext(ctxRef, null, builder.options);

    const registryVariables = [];
    const converterVariables = [];

    allRegistries.forEach(registry => {
        let rel = relative(dirname(clientFile), registry.localname);
        if (!rel.startsWith('.')) rel = `./${rel}`;
        rel = toPosixPath(rel)
        const variable = variableSlug(registry.localname);
        registryVariables.push(variable);
        registryImports.push(importNamespace(variable, rel));
    });

    allConverters.forEach(converter => {
        let rel = relative(dirname(clientFile), converter.localname);
        if (!rel.startsWith('.')) rel = `./${rel}`;
        rel = toPosixPath(rel)
        const variable = variableSlug(converter.localname);
        converterVariables.push(variable);
        converterImports.push(importNamespace(variable, rel));
    });
    const name = 'get' + pascal('AllSigningClient');
    const txRpcName = 'get' + pascal('AllSigningTxRpc');
    const prefix = camel('all');
    const aminos = createStargateClientAminoRegistry({
        context: ctx,
        aminos: converterVariables,
        aminoConverters: prefix + 'AminoConverters'
    });
    const protos = createStargateClientProtoRegistry({
        context: ctx,
        registries: registryVariables,
        protoTypeRegistry: prefix + 'ProtoRegistry'
    });
    const clientOptions = createStargateClientOptions({
        context: ctx,
        name: name + 'Options',
        protoTypeRegistry: prefix + 'ProtoRegistry',
        aminoConverters: prefix + 'AminoConverters'
    });
    const clientBody = createStargateClient({
        context: ctx,
        name,
        options: name + 'Options',
    });

    let getTxRpc;

    if (ctx.pluginValue("stargateClients.addGetTxRpc")) {
        getTxRpc = createGetTxRpc(ctx, txRpcName, name);
    }

    const imports = buildAllImportsFromGenericContext(ctx, clientFile);

    let importDecls = [...imports, ...registryImports, ...converterImports];

    importDecls = duplicateImportPathsWithExt(importDecls, builder.options.restoreImportExtension);

    let cProg = importDecls
        .concat(aminos)
        .concat(protos)
        .concat(clientOptions)
        .concat(clientBody);

    // replace all backslash path for windows
    for (let i = 0; i < cProg.length; i++) {
        if (cProg[i].source?.value) {
            cProg[i].source.value = toPosixPath(cProg[i].source?.value)
        }
    }

    if (getTxRpc) {
        cProg = cProg.concat(getTxRpc);
    }
    const clientOutFile = join(builder.outPath, clientFile);
    writeAstToFile(builder.outPath, builder.options, cProg, clientOutFile);
}