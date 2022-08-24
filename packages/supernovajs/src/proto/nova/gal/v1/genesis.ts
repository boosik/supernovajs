import { Params } from "./params";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, toTimestamp, fromTimestamp, fromJsonTimestamp, isObject } from "@osmonauts/helpers";

/** GenesisState defines the gal module's genesis state. */
export interface GenesisState {
  params: Params;
  depositAccounts: DepositAccount[];
  withdrawInfo: WithdrawInfo[];
  recordInfo: RecordInfo[];
}

/** DepositAccount defines snToken's total share and deposit information. */
export interface DepositAccount {
  denom: string;
  depositInfos: DepositInfo[];
  totalShare: Long;
  lastBlockUpdate: Long;
}

/** DepositInfo defines user address, share and debt. */
export interface DepositInfo {
  address: string;
  share: Long;
  debt: Long;
}
export interface WithdrawInfo {
  address: string;
  denom: string;
  amount: Long;
  completionTime: Date;
}
export interface RecordInfo {
  zoneId: string;
  delegateVersion: Long;
  undelegateVersion: Long;
  withdrawVersion: Long;
}
export interface DepositRecord {
  zoneId: string;
  claimer: string;
  records: DepositRecordContent[];
}
export interface DepositRecordContent {
  depositor: string;
  amount: Coin;
  state: Long;
  oracleVersion: Long;
  delegateVersion: Long;
}
export interface UndelegateRecord {
  zoneId: string;
  delegator: string;
  records: UndelegateRecordContent[];
}
export interface UndelegateRecordContent {
  withdrawer: string;
  snAssetAmount: Coin;
  withdrawAmount: Coin;
  state: Long;
  oracleVersion: Long;
  undelegateVersion: Long;
}
export interface WithdrawRecord_RecordsEntry {
  key: Long;
  value: WithdrawRecordContent;
}
export interface WithdrawRecord {
  zoneId: string;
  withdrawer: string;
  records: {
    [key: Long]: WithdrawRecordContent;
  };
}
export interface WithdrawRecordContent {
  amount: string;
  state: Long;
  oracleVersion: Long;
  withdrawVersion: Long;
  completionTime: Date;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    depositAccounts: [],
    withdrawInfo: [],
    recordInfo: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.depositAccounts) {
      DepositAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.withdrawInfo) {
      WithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.recordInfo) {
      RecordInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.depositAccounts.push(DepositAccount.decode(reader, reader.uint32()));
          break;

        case 3:
          message.withdrawInfo.push(WithdrawInfo.decode(reader, reader.uint32()));
          break;

        case 4:
          message.recordInfo.push(RecordInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      depositAccounts: Array.isArray(object?.depositAccounts) ? object.depositAccounts.map((e: any) => DepositAccount.fromJSON(e)) : [],
      withdrawInfo: Array.isArray(object?.withdrawInfo) ? object.withdrawInfo.map((e: any) => WithdrawInfo.fromJSON(e)) : [],
      recordInfo: Array.isArray(object?.recordInfo) ? object.recordInfo.map((e: any) => RecordInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.depositAccounts) {
      obj.depositAccounts = message.depositAccounts.map(e => e ? DepositAccount.toJSON(e) : undefined);
    } else {
      obj.depositAccounts = [];
    }

    if (message.withdrawInfo) {
      obj.withdrawInfo = message.withdrawInfo.map(e => e ? WithdrawInfo.toJSON(e) : undefined);
    } else {
      obj.withdrawInfo = [];
    }

    if (message.recordInfo) {
      obj.recordInfo = message.recordInfo.map(e => e ? RecordInfo.toJSON(e) : undefined);
    } else {
      obj.recordInfo = [];
    }

    return obj;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.depositAccounts = object.depositAccounts?.map(e => DepositAccount.fromPartial(e)) || [];
    message.withdrawInfo = object.withdrawInfo?.map(e => WithdrawInfo.fromPartial(e)) || [];
    message.recordInfo = object.recordInfo?.map(e => RecordInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDepositAccount(): DepositAccount {
  return {
    denom: "",
    depositInfos: [],
    totalShare: Long.ZERO,
    lastBlockUpdate: Long.ZERO
  };
}

export const DepositAccount = {
  encode(message: DepositAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    for (const v of message.depositInfos) {
      DepositInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalShare.isZero()) {
      writer.uint32(24).int64(message.totalShare);
    }

    if (!message.lastBlockUpdate.isZero()) {
      writer.uint32(32).int64(message.lastBlockUpdate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.depositInfos.push(DepositInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.totalShare = (reader.int64() as Long);
          break;

        case 4:
          message.lastBlockUpdate = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      depositInfos: Array.isArray(object?.depositInfos) ? object.depositInfos.map((e: any) => DepositInfo.fromJSON(e)) : [],
      totalShare: isSet(object.totalShare) ? Long.fromString(object.totalShare) : Long.ZERO,
      lastBlockUpdate: isSet(object.lastBlockUpdate) ? Long.fromString(object.lastBlockUpdate) : Long.ZERO
    };
  },

  toJSON(message: DepositAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);

    if (message.depositInfos) {
      obj.depositInfos = message.depositInfos.map(e => e ? DepositInfo.toJSON(e) : undefined);
    } else {
      obj.depositInfos = [];
    }

    message.totalShare !== undefined && (obj.totalShare = (message.totalShare || Long.ZERO).toString());
    message.lastBlockUpdate !== undefined && (obj.lastBlockUpdate = (message.lastBlockUpdate || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<DepositAccount>): DepositAccount {
    const message = createBaseDepositAccount();
    message.denom = object.denom ?? "";
    message.depositInfos = object.depositInfos?.map(e => DepositInfo.fromPartial(e)) || [];
    message.totalShare = object.totalShare !== undefined && object.totalShare !== null ? Long.fromValue(object.totalShare) : Long.ZERO;
    message.lastBlockUpdate = object.lastBlockUpdate !== undefined && object.lastBlockUpdate !== null ? Long.fromValue(object.lastBlockUpdate) : Long.ZERO;
    return message;
  }

};

function createBaseDepositInfo(): DepositInfo {
  return {
    address: "",
    share: Long.ZERO,
    debt: Long.ZERO
  };
}

export const DepositInfo = {
  encode(message: DepositInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.share.isZero()) {
      writer.uint32(16).int64(message.share);
    }

    if (!message.debt.isZero()) {
      writer.uint32(24).int64(message.debt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.share = (reader.int64() as Long);
          break;

        case 3:
          message.debt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      share: isSet(object.share) ? Long.fromString(object.share) : Long.ZERO,
      debt: isSet(object.debt) ? Long.fromString(object.debt) : Long.ZERO
    };
  },

  toJSON(message: DepositInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.share !== undefined && (obj.share = (message.share || Long.ZERO).toString());
    message.debt !== undefined && (obj.debt = (message.debt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<DepositInfo>): DepositInfo {
    const message = createBaseDepositInfo();
    message.address = object.address ?? "";
    message.share = object.share !== undefined && object.share !== null ? Long.fromValue(object.share) : Long.ZERO;
    message.debt = object.debt !== undefined && object.debt !== null ? Long.fromValue(object.debt) : Long.ZERO;
    return message;
  }

};

function createBaseWithdrawInfo(): WithdrawInfo {
  return {
    address: "",
    denom: "",
    amount: Long.ZERO,
    completionTime: undefined
  };
}

export const WithdrawInfo = {
  encode(message: WithdrawInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (!message.amount.isZero()) {
      writer.uint32(24).int64(message.amount);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = (reader.int64() as Long);
          break;

        case 4:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? Long.fromString(object.amount) : Long.ZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: WithdrawInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(object: Partial<WithdrawInfo>): WithdrawInfo {
    const message = createBaseWithdrawInfo();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.ZERO;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }

};

function createBaseRecordInfo(): RecordInfo {
  return {
    zoneId: "",
    delegateVersion: Long.UZERO,
    undelegateVersion: Long.UZERO,
    withdrawVersion: Long.UZERO
  };
}

export const RecordInfo = {
  encode(message: RecordInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (!message.delegateVersion.isZero()) {
      writer.uint32(16).uint64(message.delegateVersion);
    }

    if (!message.undelegateVersion.isZero()) {
      writer.uint32(24).uint64(message.undelegateVersion);
    }

    if (!message.withdrawVersion.isZero()) {
      writer.uint32(32).uint64(message.withdrawVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecordInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecordInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.delegateVersion = (reader.uint64() as Long);
          break;

        case 3:
          message.undelegateVersion = (reader.uint64() as Long);
          break;

        case 4:
          message.withdrawVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RecordInfo {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      delegateVersion: isSet(object.delegateVersion) ? Long.fromString(object.delegateVersion) : Long.UZERO,
      undelegateVersion: isSet(object.undelegateVersion) ? Long.fromString(object.undelegateVersion) : Long.UZERO,
      withdrawVersion: isSet(object.withdrawVersion) ? Long.fromString(object.withdrawVersion) : Long.UZERO
    };
  },

  toJSON(message: RecordInfo): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.delegateVersion !== undefined && (obj.delegateVersion = (message.delegateVersion || Long.UZERO).toString());
    message.undelegateVersion !== undefined && (obj.undelegateVersion = (message.undelegateVersion || Long.UZERO).toString());
    message.withdrawVersion !== undefined && (obj.withdrawVersion = (message.withdrawVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<RecordInfo>): RecordInfo {
    const message = createBaseRecordInfo();
    message.zoneId = object.zoneId ?? "";
    message.delegateVersion = object.delegateVersion !== undefined && object.delegateVersion !== null ? Long.fromValue(object.delegateVersion) : Long.UZERO;
    message.undelegateVersion = object.undelegateVersion !== undefined && object.undelegateVersion !== null ? Long.fromValue(object.undelegateVersion) : Long.UZERO;
    message.withdrawVersion = object.withdrawVersion !== undefined && object.withdrawVersion !== null ? Long.fromValue(object.withdrawVersion) : Long.UZERO;
    return message;
  }

};

function createBaseDepositRecord(): DepositRecord {
  return {
    zoneId: "",
    claimer: "",
    records: []
  };
}

export const DepositRecord = {
  encode(message: DepositRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }

    for (const v of message.records) {
      DepositRecordContent.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.claimer = reader.string();
          break;

        case 3:
          message.records.push(DepositRecordContent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DepositRecordContent.fromJSON(e)) : []
    };
  },

  toJSON(message: DepositRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.claimer !== undefined && (obj.claimer = message.claimer);

    if (message.records) {
      obj.records = message.records.map(e => e ? DepositRecordContent.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: Partial<DepositRecord>): DepositRecord {
    const message = createBaseDepositRecord();
    message.zoneId = object.zoneId ?? "";
    message.claimer = object.claimer ?? "";
    message.records = object.records?.map(e => DepositRecordContent.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDepositRecordContent(): DepositRecordContent {
  return {
    depositor: "",
    amount: undefined,
    state: Long.ZERO,
    oracleVersion: Long.UZERO,
    delegateVersion: Long.UZERO
  };
}

export const DepositRecordContent = {
  encode(message: DepositRecordContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }

    if (!message.state.isZero()) {
      writer.uint32(24).int64(message.state);
    }

    if (!message.oracleVersion.isZero()) {
      writer.uint32(32).uint64(message.oracleVersion);
    }

    if (!message.delegateVersion.isZero()) {
      writer.uint32(40).uint64(message.delegateVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecordContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecordContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;

        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.state = (reader.int64() as Long);
          break;

        case 4:
          message.oracleVersion = (reader.uint64() as Long);
          break;

        case 5:
          message.delegateVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositRecordContent {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO,
      oracleVersion: isSet(object.oracleVersion) ? Long.fromString(object.oracleVersion) : Long.UZERO,
      delegateVersion: isSet(object.delegateVersion) ? Long.fromString(object.delegateVersion) : Long.UZERO
    };
  },

  toJSON(message: DepositRecordContent): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    message.oracleVersion !== undefined && (obj.oracleVersion = (message.oracleVersion || Long.UZERO).toString());
    message.delegateVersion !== undefined && (obj.delegateVersion = (message.delegateVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<DepositRecordContent>): DepositRecordContent {
    const message = createBaseDepositRecordContent();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    message.oracleVersion = object.oracleVersion !== undefined && object.oracleVersion !== null ? Long.fromValue(object.oracleVersion) : Long.UZERO;
    message.delegateVersion = object.delegateVersion !== undefined && object.delegateVersion !== null ? Long.fromValue(object.delegateVersion) : Long.UZERO;
    return message;
  }

};

function createBaseUndelegateRecord(): UndelegateRecord {
  return {
    zoneId: "",
    delegator: "",
    records: []
  };
}

export const UndelegateRecord = {
  encode(message: UndelegateRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }

    for (const v of message.records) {
      UndelegateRecordContent.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.delegator = reader.string();
          break;

        case 3:
          message.records.push(UndelegateRecordContent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndelegateRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => UndelegateRecordContent.fromJSON(e)) : []
    };
  },

  toJSON(message: UndelegateRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.delegator !== undefined && (obj.delegator = message.delegator);

    if (message.records) {
      obj.records = message.records.map(e => e ? UndelegateRecordContent.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: Partial<UndelegateRecord>): UndelegateRecord {
    const message = createBaseUndelegateRecord();
    message.zoneId = object.zoneId ?? "";
    message.delegator = object.delegator ?? "";
    message.records = object.records?.map(e => UndelegateRecordContent.fromPartial(e)) || [];
    return message;
  }

};

function createBaseUndelegateRecordContent(): UndelegateRecordContent {
  return {
    withdrawer: "",
    snAssetAmount: undefined,
    withdrawAmount: undefined,
    state: Long.ZERO,
    oracleVersion: Long.UZERO,
    undelegateVersion: Long.UZERO
  };
}

export const UndelegateRecordContent = {
  encode(message: UndelegateRecordContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }

    if (message.snAssetAmount !== undefined) {
      Coin.encode(message.snAssetAmount, writer.uint32(18).fork()).ldelim();
    }

    if (message.withdrawAmount !== undefined) {
      Coin.encode(message.withdrawAmount, writer.uint32(26).fork()).ldelim();
    }

    if (!message.state.isZero()) {
      writer.uint32(32).int64(message.state);
    }

    if (!message.oracleVersion.isZero()) {
      writer.uint32(40).uint64(message.oracleVersion);
    }

    if (!message.undelegateVersion.isZero()) {
      writer.uint32(48).uint64(message.undelegateVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateRecordContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateRecordContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;

        case 2:
          message.snAssetAmount = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.withdrawAmount = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.state = (reader.int64() as Long);
          break;

        case 5:
          message.oracleVersion = (reader.uint64() as Long);
          break;

        case 6:
          message.undelegateVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UndelegateRecordContent {
    return {
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      snAssetAmount: isSet(object.snAssetAmount) ? Coin.fromJSON(object.snAssetAmount) : undefined,
      withdrawAmount: isSet(object.withdrawAmount) ? Coin.fromJSON(object.withdrawAmount) : undefined,
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO,
      oracleVersion: isSet(object.oracleVersion) ? Long.fromString(object.oracleVersion) : Long.UZERO,
      undelegateVersion: isSet(object.undelegateVersion) ? Long.fromString(object.undelegateVersion) : Long.UZERO
    };
  },

  toJSON(message: UndelegateRecordContent): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.snAssetAmount !== undefined && (obj.snAssetAmount = message.snAssetAmount ? Coin.toJSON(message.snAssetAmount) : undefined);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = message.withdrawAmount ? Coin.toJSON(message.withdrawAmount) : undefined);
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    message.oracleVersion !== undefined && (obj.oracleVersion = (message.oracleVersion || Long.UZERO).toString());
    message.undelegateVersion !== undefined && (obj.undelegateVersion = (message.undelegateVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: Partial<UndelegateRecordContent>): UndelegateRecordContent {
    const message = createBaseUndelegateRecordContent();
    message.withdrawer = object.withdrawer ?? "";
    message.snAssetAmount = object.snAssetAmount !== undefined && object.snAssetAmount !== null ? Coin.fromPartial(object.snAssetAmount) : undefined;
    message.withdrawAmount = object.withdrawAmount !== undefined && object.withdrawAmount !== null ? Coin.fromPartial(object.withdrawAmount) : undefined;
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    message.oracleVersion = object.oracleVersion !== undefined && object.oracleVersion !== null ? Long.fromValue(object.oracleVersion) : Long.UZERO;
    message.undelegateVersion = object.undelegateVersion !== undefined && object.undelegateVersion !== null ? Long.fromValue(object.undelegateVersion) : Long.UZERO;
    return message;
  }

};

function createBaseWithdrawRecord_RecordsEntry(): WithdrawRecord_RecordsEntry {
  return {
    key: Long.UZERO,
    value: undefined
  };
}

export const WithdrawRecord_RecordsEntry = {
  encode(message: WithdrawRecord_RecordsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).uint64(message.key);
    }

    if (message.value !== undefined) {
      WithdrawRecordContent.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecord_RecordsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRecord_RecordsEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = (reader.uint64() as Long);
          break;

        case 2:
          message.value = WithdrawRecordContent.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawRecord_RecordsEntry {
    return {
      key: isSet(object.key) ? Long.fromString(object.key) : Long.UZERO,
      value: isSet(object.value) ? WithdrawRecordContent.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: WithdrawRecord_RecordsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || Long.UZERO).toString());
    message.value !== undefined && (obj.value = message.value ? WithdrawRecordContent.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: Partial<WithdrawRecord_RecordsEntry>): WithdrawRecord_RecordsEntry {
    const message = createBaseWithdrawRecord_RecordsEntry();
    message.key = object.key !== undefined && object.key !== null ? Long.fromValue(object.key) : Long.UZERO;
    message.value = object.value !== undefined && object.value !== null ? WithdrawRecordContent.fromPartial(object.value) : undefined;
    return message;
  }

};

function createBaseWithdrawRecord(): WithdrawRecord {
  return {
    zoneId: "",
    withdrawer: "",
    records: {}
  };
}

export const WithdrawRecord = {
  encode(message: WithdrawRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.withdrawer !== "") {
      writer.uint32(18).string(message.withdrawer);
    }

    Object.entries(message.records).forEach(([key, value]) => {
      WithdrawRecord_RecordsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.withdrawer = reader.string();
          break;

        case 3:
          const entry3 = WithdrawRecord_RecordsEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.records[entry3.key] = entry3.value;
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawRecord {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      records: isObject(object.records) ? Object.entries(object.records).reduce<{
        [key: Long]: WithdrawRecordContent;
      }>((acc, [key, value]) => {
        acc[Number(key)] = WithdrawRecordContent.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: WithdrawRecord): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    obj.records = {};

    if (message.records) {
      Object.entries(message.records).forEach(([k, v]) => {
        obj.records[k] = WithdrawRecordContent.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial(object: Partial<WithdrawRecord>): WithdrawRecord {
    const message = createBaseWithdrawRecord();
    message.zoneId = object.zoneId ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.records = Object.entries(object.records ?? {}).reduce<{
      [key: Long]: WithdrawRecordContent;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = WithdrawRecordContent.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};

function createBaseWithdrawRecordContent(): WithdrawRecordContent {
  return {
    amount: "",
    state: Long.ZERO,
    oracleVersion: Long.ZERO,
    withdrawVersion: Long.UZERO,
    completionTime: undefined
  };
}

export const WithdrawRecordContent = {
  encode(message: WithdrawRecordContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }

    if (!message.state.isZero()) {
      writer.uint32(16).int64(message.state);
    }

    if (!message.oracleVersion.isZero()) {
      writer.uint32(24).int64(message.oracleVersion);
    }

    if (!message.withdrawVersion.isZero()) {
      writer.uint32(32).uint64(message.withdrawVersion);
    }

    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecordContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRecordContent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;

        case 2:
          message.state = (reader.int64() as Long);
          break;

        case 3:
          message.oracleVersion = (reader.int64() as Long);
          break;

        case 4:
          message.withdrawVersion = (reader.uint64() as Long);
          break;

        case 5:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawRecordContent {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      state: isSet(object.state) ? Long.fromString(object.state) : Long.ZERO,
      oracleVersion: isSet(object.oracleVersion) ? Long.fromString(object.oracleVersion) : Long.ZERO,
      withdrawVersion: isSet(object.withdrawVersion) ? Long.fromString(object.withdrawVersion) : Long.UZERO,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined
    };
  },

  toJSON(message: WithdrawRecordContent): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.state !== undefined && (obj.state = (message.state || Long.ZERO).toString());
    message.oracleVersion !== undefined && (obj.oracleVersion = (message.oracleVersion || Long.ZERO).toString());
    message.withdrawVersion !== undefined && (obj.withdrawVersion = (message.withdrawVersion || Long.UZERO).toString());
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial(object: Partial<WithdrawRecordContent>): WithdrawRecordContent {
    const message = createBaseWithdrawRecordContent();
    message.amount = object.amount ?? "";
    message.state = object.state !== undefined && object.state !== null ? Long.fromValue(object.state) : Long.ZERO;
    message.oracleVersion = object.oracleVersion !== undefined && object.oracleVersion !== null ? Long.fromValue(object.oracleVersion) : Long.ZERO;
    message.withdrawVersion = object.withdrawVersion !== undefined && object.withdrawVersion !== null ? Long.fromValue(object.withdrawVersion) : Long.UZERO;
    message.completionTime = object.completionTime ?? undefined;
    return message;
  }

};