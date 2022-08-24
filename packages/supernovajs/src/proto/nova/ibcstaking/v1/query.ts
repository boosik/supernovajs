import { RegisteredZone } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "nova.ibcstaking.v1";

/** QueryAllZonesRequest is the request type for Query/AllZones. */
export interface QueryAllZonesRequest {}

/** QueryAllZonesResponse is the response type for Query/AllZones. */
export interface QueryAllZonesResponse {
  zones: RegisteredZone[];
}

function createBaseQueryAllZonesRequest(): QueryAllZonesRequest {
  return {};
}

export const QueryAllZonesRequest = {
  encode(_: QueryAllZonesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllZonesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllZonesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): QueryAllZonesRequest {
    return {};
  },

  toJSON(_: QueryAllZonesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllZonesRequest>): QueryAllZonesRequest {
    const message = createBaseQueryAllZonesRequest();
    return message;
  }

};

function createBaseQueryAllZonesResponse(): QueryAllZonesResponse {
  return {
    zones: []
  };
}

export const QueryAllZonesResponse = {
  encode(message: QueryAllZonesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zones) {
      RegisteredZone.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllZonesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllZonesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zones.push(RegisteredZone.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllZonesResponse {
    return {
      zones: Array.isArray(object?.zones) ? object.zones.map((e: any) => RegisteredZone.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryAllZonesResponse): unknown {
    const obj: any = {};

    if (message.zones) {
      obj.zones = message.zones.map(e => e ? RegisteredZone.toJSON(e) : undefined);
    } else {
      obj.zones = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllZonesResponse>): QueryAllZonesResponse {
    const message = createBaseQueryAllZonesResponse();
    message.zones = object.zones?.map(e => RegisteredZone.fromPartial(e)) || [];
    return message;
  }

};