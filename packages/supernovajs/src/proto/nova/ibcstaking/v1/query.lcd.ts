import { RegisteredZone } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAllZonesRequest, QueryAllZonesResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* AllZones returns all the zones registered. */
  async allZones(_params: QueryAllZonesRequest = {}): Promise<QueryAllZonesResponse> {
    const endpoint = `nova/ibcstaking/v1/zones/all`;
    return await this.request<QueryAllZonesResponse>(endpoint);
  }

}