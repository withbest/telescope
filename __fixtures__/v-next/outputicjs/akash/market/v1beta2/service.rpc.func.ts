import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
export const createCreateBid = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateBid>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateBid.typeUrl,
  encoders: toEncoders(MsgCreateBid),
  converters: toConverters(MsgCreateBid)
});
export const useCreateBid = buildUseMutation<MsgCreateBid, Error>({
  builderMutationFn: createCreateBid
});
export const createCloseBid = (getSigningClient: SigningClientResolver) => buildTx<MsgCloseBid>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCloseBid.typeUrl,
  encoders: toEncoders(MsgCloseBid),
  converters: toConverters(MsgCloseBid)
});
export const useCloseBid = buildUseMutation<MsgCloseBid, Error>({
  builderMutationFn: createCloseBid
});
export const createWithdrawLease = (getSigningClient: SigningClientResolver) => buildTx<MsgWithdrawLease>({
  getSigningClient: getSigningClient,
  typeUrl: MsgWithdrawLease.typeUrl,
  encoders: toEncoders(MsgWithdrawLease),
  converters: toConverters(MsgWithdrawLease)
});
export const useWithdrawLease = buildUseMutation<MsgWithdrawLease, Error>({
  builderMutationFn: createWithdrawLease
});
export const createCreateLease = (getSigningClient: SigningClientResolver) => buildTx<MsgCreateLease>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCreateLease.typeUrl,
  encoders: toEncoders(MsgCreateLease),
  converters: toConverters(MsgCreateLease)
});
export const useCreateLease = buildUseMutation<MsgCreateLease, Error>({
  builderMutationFn: createCreateLease
});
export const createCloseLease = (getSigningClient: SigningClientResolver) => buildTx<MsgCloseLease>({
  getSigningClient: getSigningClient,
  typeUrl: MsgCloseLease.typeUrl,
  encoders: toEncoders(MsgCloseLease),
  converters: toConverters(MsgCloseLease)
});
export const useCloseLease = buildUseMutation<MsgCloseLease, Error>({
  builderMutationFn: createCloseLease
});