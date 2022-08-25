import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, ClaimableAmountRequest, ClaimableAmountResponse, PendingWithdrawalsRequest, PendingWithdrawalsResponse, ActiveWithdrawalsRequest, ActiveWithdrawalsResponse, QueryDepositRecordRequest, QueryDepositRecordResponse, QueryUndelegateRecordRequest, QueryUndelegateRecordResponse, QueryWithdrawRecordRequest, QueryWithdrawRecordResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    claimableAmount(params: ClaimableAmountRequest): Promise<ClaimableAmountResponse>;
    pendingWithdrawals(params: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse>;
    activeWithdrawals(params: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse>;
    depositRecords(params: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse>;
    undelegateRecords(params: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse>;
    withdrawRecords(params: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse>;
}
