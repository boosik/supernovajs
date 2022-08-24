import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryStateRequest {
    chainDenom: string;
}
export interface QueryStateResponse {
    coin: Coin;
    operator: string;
    decimal: number;
    lastBlockHeight: Long;
    appHash: Uint8Array;
    chainId: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryStateRequest: {
    encode(message: QueryStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRequest;
    fromJSON(object: any): QueryStateRequest;
    toJSON(message: QueryStateRequest): unknown;
    fromPartial(object: Partial<QueryStateRequest>): QueryStateRequest;
};
export declare const QueryStateResponse: {
    encode(message: QueryStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateResponse;
    fromJSON(object: any): QueryStateResponse;
    toJSON(message: QueryStateResponse): unknown;
    fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse;
};
