import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export const createGetAllowance = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encoder: QueryAllowanceRequest.encode,
  decoder: QueryAllowanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Allowance",
  getRpcInstance: getRpcInstance
});
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const createGetAllowances = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encoder: QueryAllowancesRequest.encode,
  decoder: QueryAllowancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Allowances",
  getRpcInstance: getRpcInstance
});
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const createGetAllowancesByGranter = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encoder: QueryAllowancesByGranterRequest.encode,
  decoder: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllowancesByGranter",
  getRpcInstance: getRpcInstance
});
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});