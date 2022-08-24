import { RegisteredZone } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryAllZonesRequest, QueryAllZonesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  allZones(request: QueryAllZonesRequest): Promise<QueryAllZonesResponse>;
  /*AllZones returns all the zones registered.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.allZones = this.allZones.bind(this);
  }

  allZones(request: QueryAllZonesRequest): Promise<QueryAllZonesResponse> {
    const data = QueryAllZonesRequest.encode(request).finish();
    const promise = this.rpc.request("nova.ibcstaking.v1.Query", "AllZones", data);
    return promise.then(data => QueryAllZonesResponse.decode(new _m0.Reader(data)));
  }

}