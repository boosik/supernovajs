import { RegisteredZone } from "./genesis";
import * as _m0 from "protobufjs/minimal";
/** QueryAllZonesRequest is the request type for Query/AllZones. */
export interface QueryAllZonesRequest {
}
/** QueryAllZonesResponse is the response type for Query/AllZones. */
export interface QueryAllZonesResponse {
    zones: RegisteredZone[];
}
export declare const QueryAllZonesRequest: {
    encode(_: QueryAllZonesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllZonesRequest;
    fromJSON(_: any): QueryAllZonesRequest;
    toJSON(_: QueryAllZonesRequest): unknown;
    fromPartial(_: Partial<QueryAllZonesRequest>): QueryAllZonesRequest;
};
export declare const QueryAllZonesResponse: {
    encode(message: QueryAllZonesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllZonesResponse;
    fromJSON(object: any): QueryAllZonesResponse;
    toJSON(message: QueryAllZonesResponse): unknown;
    fromPartial(object: Partial<QueryAllZonesResponse>): QueryAllZonesResponse;
};
