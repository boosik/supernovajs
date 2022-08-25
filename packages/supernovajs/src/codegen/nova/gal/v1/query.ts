import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DepositRecord, UndelegateRecord, WithdrawRecord } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "@osmonauts/helpers";

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseClaimableAmountRequest(): ClaimableAmountRequest {
  return {
    zoneId: "",
    address: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const ClaimableAmountRequest = {
  encode(message: ClaimableAmountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimableAmountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableAmountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimableAmountRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: ClaimableAmountRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: Partial<ClaimableAmountRequest>): ClaimableAmountRequest {
    const message = createBaseClaimableAmountRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseClaimableAmountResponse(): ClaimableAmountResponse {
  return {
    amount: undefined
  };
}

export const ClaimableAmountResponse = {
  encode(message: ClaimableAmountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimableAmountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimableAmountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimableAmountResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: ClaimableAmountResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClaimableAmountResponse>): ClaimableAmountResponse {
    const message = createBaseClaimableAmountResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBasePendingWithdrawalsRequest(): PendingWithdrawalsRequest {
  return {
    zoneId: "",
    address: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const PendingWithdrawalsRequest = {
  encode(message: PendingWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingWithdrawalsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingWithdrawalsRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: PendingWithdrawalsRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: Partial<PendingWithdrawalsRequest>): PendingWithdrawalsRequest {
    const message = createBasePendingWithdrawalsRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBasePendingWithdrawalsResponse(): PendingWithdrawalsResponse {
  return {
    amount: undefined
  };
}

export const PendingWithdrawalsResponse = {
  encode(message: PendingWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingWithdrawalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PendingWithdrawalsResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: PendingWithdrawalsResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<PendingWithdrawalsResponse>): PendingWithdrawalsResponse {
    const message = createBasePendingWithdrawalsResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseActiveWithdrawalsRequest(): ActiveWithdrawalsRequest {
  return {
    zoneId: "",
    address: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const ActiveWithdrawalsRequest = {
  encode(message: ActiveWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveWithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveWithdrawalsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.transferPortId = reader.string();
          break;

        case 4:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveWithdrawalsRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: ActiveWithdrawalsRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: Partial<ActiveWithdrawalsRequest>): ActiveWithdrawalsRequest {
    const message = createBaseActiveWithdrawalsRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseActiveWithdrawalsResponse(): ActiveWithdrawalsResponse {
  return {
    amount: undefined
  };
}

export const ActiveWithdrawalsResponse = {
  encode(message: ActiveWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveWithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveWithdrawalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActiveWithdrawalsResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: ActiveWithdrawalsResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ActiveWithdrawalsResponse>): ActiveWithdrawalsResponse {
    const message = createBaseActiveWithdrawalsResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseQueryDepositRecordRequest(): QueryDepositRecordRequest {
  return {
    zoneId: "",
    address: ""
  };
}

export const QueryDepositRecordRequest = {
  encode(message: QueryDepositRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositRecordRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryDepositRecordRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryDepositRecordRequest>): QueryDepositRecordRequest {
    const message = createBaseQueryDepositRecordRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryDepositRecordResponse(): QueryDepositRecordResponse {
  return {
    depositRecord: undefined
  };
}

export const QueryDepositRecordResponse = {
  encode(message: QueryDepositRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositRecord !== undefined) {
      DepositRecord.encode(message.depositRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositRecord = DepositRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositRecordResponse {
    return {
      depositRecord: isSet(object.depositRecord) ? DepositRecord.fromJSON(object.depositRecord) : undefined
    };
  },

  toJSON(message: QueryDepositRecordResponse): unknown {
    const obj: any = {};
    message.depositRecord !== undefined && (obj.depositRecord = message.depositRecord ? DepositRecord.toJSON(message.depositRecord) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryDepositRecordResponse>): QueryDepositRecordResponse {
    const message = createBaseQueryDepositRecordResponse();
    message.depositRecord = object.depositRecord !== undefined && object.depositRecord !== null ? DepositRecord.fromPartial(object.depositRecord) : undefined;
    return message;
  }

};

function createBaseQueryUndelegateRecordRequest(): QueryUndelegateRecordRequest {
  return {
    zoneId: "",
    address: ""
  };
}

export const QueryUndelegateRecordRequest = {
  encode(message: QueryUndelegateRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUndelegateRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUndelegateRecordRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryUndelegateRecordRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryUndelegateRecordRequest>): QueryUndelegateRecordRequest {
    const message = createBaseQueryUndelegateRecordRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryUndelegateRecordResponse(): QueryUndelegateRecordResponse {
  return {
    undelegateRecord: undefined
  };
}

export const QueryUndelegateRecordResponse = {
  encode(message: QueryUndelegateRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.undelegateRecord !== undefined) {
      UndelegateRecord.encode(message.undelegateRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUndelegateRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUndelegateRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.undelegateRecord = UndelegateRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryUndelegateRecordResponse {
    return {
      undelegateRecord: isSet(object.undelegateRecord) ? UndelegateRecord.fromJSON(object.undelegateRecord) : undefined
    };
  },

  toJSON(message: QueryUndelegateRecordResponse): unknown {
    const obj: any = {};
    message.undelegateRecord !== undefined && (obj.undelegateRecord = message.undelegateRecord ? UndelegateRecord.toJSON(message.undelegateRecord) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryUndelegateRecordResponse>): QueryUndelegateRecordResponse {
    const message = createBaseQueryUndelegateRecordResponse();
    message.undelegateRecord = object.undelegateRecord !== undefined && object.undelegateRecord !== null ? UndelegateRecord.fromPartial(object.undelegateRecord) : undefined;
    return message;
  }

};

function createBaseQueryWithdrawRecordRequest(): QueryWithdrawRecordRequest {
  return {
    zoneId: "",
    address: ""
  };
}

export const QueryWithdrawRecordRequest = {
  encode(message: QueryWithdrawRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRecordRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryWithdrawRecordRequest {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryWithdrawRecordRequest): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: Partial<QueryWithdrawRecordRequest>): QueryWithdrawRecordRequest {
    const message = createBaseQueryWithdrawRecordRequest();
    message.zoneId = object.zoneId ?? "";
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryWithdrawRecordResponse(): QueryWithdrawRecordResponse {
  return {
    withdrawRecord: undefined
  };
}

export const QueryWithdrawRecordResponse = {
  encode(message: QueryWithdrawRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawRecord !== undefined) {
      WithdrawRecord.encode(message.withdrawRecord, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRecordResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawRecord = WithdrawRecord.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryWithdrawRecordResponse {
    return {
      withdrawRecord: isSet(object.withdrawRecord) ? WithdrawRecord.fromJSON(object.withdrawRecord) : undefined
    };
  },

  toJSON(message: QueryWithdrawRecordResponse): unknown {
    const obj: any = {};
    message.withdrawRecord !== undefined && (obj.withdrawRecord = message.withdrawRecord ? WithdrawRecord.toJSON(message.withdrawRecord) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryWithdrawRecordResponse>): QueryWithdrawRecordResponse {
    const message = createBaseQueryWithdrawRecordResponse();
    message.withdrawRecord = object.withdrawRecord !== undefined && object.withdrawRecord !== null ? WithdrawRecord.fromPartial(object.withdrawRecord) : undefined;
    return message;
  }

};