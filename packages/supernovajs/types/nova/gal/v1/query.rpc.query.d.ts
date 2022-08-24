import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, ClaimableAmountRequest, ClaimableAmountResponse, PendingWithdrawalsRequest, PendingWithdrawalsResponse, ActiveWithdrawalsRequest, ActiveWithdrawalsResponse, QueryDepositRecordRequest, QueryDepositRecordResponse, QueryUndelegateRecordRequest, QueryUndelegateRecordResponse, QueryWithdrawRecordRequest, QueryWithdrawRecordResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimableAmount(request: ClaimableAmountRequest): Promise<ClaimableAmountResponse>;
    pendingWithdrawals(request: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse>;
    activeWithdrawals(request: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse>;
    depositRecords(request: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse>;
    undelegateRecords(request: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse>;
    withdrawRecords(request: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimableAmount(request: ClaimableAmountRequest): Promise<ClaimableAmountResponse>;
    pendingWithdrawals(request: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse>;
    activeWithdrawals(request: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse>;
    depositRecords(request: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse>;
    undelegateRecords(request: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse>;
    withdrawRecords(request: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse>;
}
