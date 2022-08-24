import { LCDClient } from "@osmonauts/lcd";
import { QueryAllZonesRequest, QueryAllZonesResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    allZones(_params?: QueryAllZonesRequest): Promise<QueryAllZonesResponse>;
}
