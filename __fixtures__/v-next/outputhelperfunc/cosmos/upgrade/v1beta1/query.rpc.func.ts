import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
export const createGetCurrentPlan = (getRpcInstance: RpcResolver) => buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encoder: QueryCurrentPlanRequest.encode,
  decoder: QueryCurrentPlanResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CurrentPlan",
  getRpcInstance: getRpcInstance
});
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const createGetAppliedPlan = (getRpcInstance: RpcResolver) => buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encoder: QueryAppliedPlanRequest.encode,
  decoder: QueryAppliedPlanResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AppliedPlan",
  getRpcInstance: getRpcInstance
});
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const createGetUpgradedConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encoder: QueryUpgradedConsensusStateRequest.encode,
  decoder: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpgradedConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const createGetModuleVersions = (getRpcInstance: RpcResolver) => buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encoder: QueryModuleVersionsRequest.encode,
  decoder: QueryModuleVersionsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleVersions",
  getRpcInstance: getRpcInstance
});
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const createGetAuthority = (getRpcInstance: RpcResolver) => buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encoder: QueryAuthorityRequest.encode,
  decoder: QueryAuthorityResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Authority",
  getRpcInstance: getRpcInstance
});
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});