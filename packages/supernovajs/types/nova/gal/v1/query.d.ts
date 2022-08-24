import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DepositRecord, UndelegateRecord, WithdrawRecord } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** ClaimableAmountRequest is the request type for the Query/ClaimableAmount RPC method. */
export interface ClaimableAmountRequest {
    zoneId: string;
    address: string;
    transferPortId: string;
    transferChannelId: string;
}
/** ClaimableAmountResponse is the response type for the Query/ClaimableAmount RPC method. */
export interface ClaimableAmountResponse {
    amount: Coin;
}
/** PendingWithdrawalsRequest is the request type for the Query/PendingWithdrawals RPC method. */
export interface PendingWithdrawalsRequest {
    zoneId: string;
    address: string;
    transferPortId: string;
    transferChannelId: string;
}
/** PendingWithdrawalsResponse is the response type for the Query/PendingWithdrawals RPC method. */
export interface PendingWithdrawalsResponse {
    amount: Coin;
}
/** ActiveWithdrawalsRequest is the request type for the Query/ActiveWithdrawals RPC method. */
export interface ActiveWithdrawalsRequest {
    zoneId: string;
    address: string;
    transferPortId: string;
    transferChannelId: string;
}
/** ActiveWithdrawalsResponse is the response type for the Query/ActiveWithdrawals RPC method. */
export interface ActiveWithdrawalsResponse {
    amount: Coin;
}
export interface QueryDepositRecordRequest {
    zoneId: string;
    address: string;
}
export interface QueryDepositRecordResponse {
    depositRecord: DepositRecord;
}
export interface QueryUndelegateRecordRequest {
    zoneId: string;
    address: string;
}
export interface QueryUndelegateRecordResponse {
    undelegateRecord: UndelegateRecord;
}
export interface QueryWithdrawRecordRequest {
    zoneId: string;
    address: string;
}
export interface QueryWithdrawRecordResponse {
    withdrawRecord: WithdrawRecord;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const ClaimableAmountRequest: {
    encode(message: ClaimableAmountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimableAmountRequest;
    fromJSON(object: any): ClaimableAmountRequest;
    toJSON(message: ClaimableAmountRequest): unknown;
    fromPartial(object: DeepPartial<ClaimableAmountRequest>): ClaimableAmountRequest;
};
export declare const ClaimableAmountResponse: {
    encode(message: ClaimableAmountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimableAmountResponse;
    fromJSON(object: any): ClaimableAmountResponse;
    toJSON(message: ClaimableAmountResponse): unknown;
    fromPartial(object: DeepPartial<ClaimableAmountResponse>): ClaimableAmountResponse;
};
export declare const PendingWithdrawalsRequest: {
    encode(message: PendingWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdrawalsRequest;
    fromJSON(object: any): PendingWithdrawalsRequest;
    toJSON(message: PendingWithdrawalsRequest): unknown;
    fromPartial(object: DeepPartial<PendingWithdrawalsRequest>): PendingWithdrawalsRequest;
};
export declare const PendingWithdrawalsResponse: {
    encode(message: PendingWithdrawalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdrawalsResponse;
    fromJSON(object: any): PendingWithdrawalsResponse;
    toJSON(message: PendingWithdrawalsResponse): unknown;
    fromPartial(object: DeepPartial<PendingWithdrawalsResponse>): PendingWithdrawalsResponse;
};
export declare const ActiveWithdrawalsRequest: {
    encode(message: ActiveWithdrawalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveWithdrawalsRequest;
    fromJSON(object: any): ActiveWithdrawalsRequest;
    toJSON(message: ActiveWithdrawalsRequest): unknown;
    fromPartial(object: DeepPartial<ActiveWithdrawalsRequest>): ActiveWithdrawalsRequest;
};
export declare const ActiveWithdrawalsResponse: {
    encode(message: ActiveWithdrawalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveWithdrawalsResponse;
    fromJSON(object: any): ActiveWithdrawalsResponse;
    toJSON(message: ActiveWithdrawalsResponse): unknown;
    fromPartial(object: DeepPartial<ActiveWithdrawalsResponse>): ActiveWithdrawalsResponse;
};
export declare const QueryDepositRecordRequest: {
    encode(message: QueryDepositRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordRequest;
    fromJSON(object: any): QueryDepositRecordRequest;
    toJSON(message: QueryDepositRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryDepositRecordRequest>): QueryDepositRecordRequest;
};
export declare const QueryDepositRecordResponse: {
    encode(message: QueryDepositRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordResponse;
    fromJSON(object: any): QueryDepositRecordResponse;
    toJSON(message: QueryDepositRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryDepositRecordResponse>): QueryDepositRecordResponse;
};
export declare const QueryUndelegateRecordRequest: {
    encode(message: QueryUndelegateRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateRecordRequest;
    fromJSON(object: any): QueryUndelegateRecordRequest;
    toJSON(message: QueryUndelegateRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryUndelegateRecordRequest>): QueryUndelegateRecordRequest;
};
export declare const QueryUndelegateRecordResponse: {
    encode(message: QueryUndelegateRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateRecordResponse;
    fromJSON(object: any): QueryUndelegateRecordResponse;
    toJSON(message: QueryUndelegateRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryUndelegateRecordResponse>): QueryUndelegateRecordResponse;
};
export declare const QueryWithdrawRecordRequest: {
    encode(message: QueryWithdrawRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRecordRequest;
    fromJSON(object: any): QueryWithdrawRecordRequest;
    toJSON(message: QueryWithdrawRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryWithdrawRecordRequest>): QueryWithdrawRecordRequest;
};
export declare const QueryWithdrawRecordResponse: {
    encode(message: QueryWithdrawRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRecordResponse;
    fromJSON(object: any): QueryWithdrawRecordResponse;
    toJSON(message: QueryWithdrawRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryWithdrawRecordResponse>): QueryWithdrawRecordResponse;
};
