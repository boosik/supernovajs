import { Rpc } from "@osmonauts/helpers";
import { QueryAllZonesRequest, QueryAllZonesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    allZones(request: QueryAllZonesRequest): Promise<QueryAllZonesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allZones(request: QueryAllZonesRequest): Promise<QueryAllZonesResponse>;
}
