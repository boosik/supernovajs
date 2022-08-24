import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryStateRequest, QueryStateResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    state(params: QueryStateRequest): Promise<QueryStateResponse>;
}
