import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export const protobufPackage = "nova.gal.v1";

/** MsgDeposit defines user who deposit and amount of coins. */
export interface MsgDeposit {
  zoneId: string;
  depositor: string;
  claimer: string;
  amount: Coin;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgDepositResponse {
  receiver: string;
  depositor: string;
  depositedAmount: Coin;
}
export interface MsgDelegate {
  zoneId: string;
  controllerAddress: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgDelegateResponse {}
export interface MsgUndelegate {
  zoneId: string;
  controllerAddress: string;
}
export interface MsgUndelegateResponse {
  zoneId: string;
  totalBurnAsset: Coin;
  totalUndelegateAsset: Coin;
}

/** MsgUnStaking defines user who want to un-stake his/her asset. */
export interface MsgPendingUndelegate {
  zoneId: string;
  delegator: string;
  withdrawer: string;
  amount: Coin;
}
export interface MsgPendingUndelegateResponse {
  zoneId: string;
  delegator: string;
  withdrawer: string;
  burnAsset: Coin;
  undelegateAsset: Coin;
}

/** MsgWithdraw defines user who withdraw and amount of coins. */
export interface MsgWithdraw {
  zoneId: string;
  withdrawer: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgWithdrawResponse {
  withdrawer: string;
  withdrawAmount: string;
}

/** MsgClaim defines claim msg used when user want to claim their st token. */
export interface MsgClaimSnAsset {
  zoneId: string;
  claimer: string;
  transferPortId: string;
  transferChannelId: string;
}
export interface MsgClaimSnAssetResponse {
  claimer: string;
  minted: Coin;
}
export interface MsgPendingWithdraw {
  zoneId: string;
  controllerAddress: string;
  icaTransferPortId: string;
  icaTransferChannelId: string;
  chainTime: Date;
}
export interface MsgPendingWithdrawResponse {}

function createBaseMsgDeposit(): MsgDeposit {
  return {
    zoneId: "",
    depositor: "",
    claimer: "",
    amount: undefined,
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    if (message.claimer !== "") {
      writer.uint32(26).string(message.claimer);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    if (message.transferPortId !== "") {
      writer.uint32(42).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(50).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.claimer = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.transferPortId = reader.string();
          break;

        case 6:
          message.transferChannelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeposit {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.zoneId = object.zoneId ?? "";
    message.depositor = object.depositor ?? "";
    message.claimer = object.claimer ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {
    receiver: "",
    depositor: "",
    depositedAmount: undefined
  };
}

export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receiver !== "") {
      writer.uint32(10).string(message.receiver);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    if (message.depositedAmount !== undefined) {
      Coin.encode(message.depositedAmount, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string();
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.depositedAmount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDepositResponse {
    return {
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      depositedAmount: isSet(object.depositedAmount) ? Coin.fromJSON(object.depositedAmount) : undefined
    };
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.depositedAmount !== undefined && (obj.depositedAmount = message.depositedAmount ? Coin.toJSON(message.depositedAmount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.receiver = object.receiver ?? "";
    message.depositor = object.depositor ?? "";
    message.depositedAmount = object.depositedAmount !== undefined && object.depositedAmount !== null ? Coin.fromPartial(object.depositedAmount) : undefined;
    return message;
  }

};

function createBaseMsgDelegate(): MsgDelegate {
  return {
    zoneId: "",
    controllerAddress: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(18).string(message.controllerAddress);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.controllerAddress = reader.string();
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

  fromJSON(object: any): MsgDelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelegate>): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.zoneId = object.zoneId ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();

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

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDelegateResponse>): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  }

};

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    zoneId: "",
    controllerAddress: ""
  };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(18).string(message.controllerAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.controllerAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : ""
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegate>): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.zoneId = object.zoneId ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    return message;
  }

};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    zoneId: "",
    totalBurnAsset: undefined,
    totalUndelegateAsset: undefined
  };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.totalBurnAsset !== undefined) {
      Coin.encode(message.totalBurnAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.totalUndelegateAsset !== undefined) {
      Coin.encode(message.totalUndelegateAsset, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.totalBurnAsset = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.totalUndelegateAsset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      totalBurnAsset: isSet(object.totalBurnAsset) ? Coin.fromJSON(object.totalBurnAsset) : undefined,
      totalUndelegateAsset: isSet(object.totalUndelegateAsset) ? Coin.fromJSON(object.totalUndelegateAsset) : undefined
    };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.totalBurnAsset !== undefined && (obj.totalBurnAsset = message.totalBurnAsset ? Coin.toJSON(message.totalBurnAsset) : undefined);
    message.totalUndelegateAsset !== undefined && (obj.totalUndelegateAsset = message.totalUndelegateAsset ? Coin.toJSON(message.totalUndelegateAsset) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUndelegateResponse>): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.zoneId = object.zoneId ?? "";
    message.totalBurnAsset = object.totalBurnAsset !== undefined && object.totalBurnAsset !== null ? Coin.fromPartial(object.totalBurnAsset) : undefined;
    message.totalUndelegateAsset = object.totalUndelegateAsset !== undefined && object.totalUndelegateAsset !== null ? Coin.fromPartial(object.totalUndelegateAsset) : undefined;
    return message;
  }

};

function createBaseMsgPendingUndelegate(): MsgPendingUndelegate {
  return {
    zoneId: "",
    delegator: "",
    withdrawer: "",
    amount: undefined
  };
}

export const MsgPendingUndelegate = {
  encode(message: MsgPendingUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }

    if (message.withdrawer !== "") {
      writer.uint32(26).string(message.withdrawer);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingUndelegate();

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
          message.withdrawer = reader.string();
          break;

        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingUndelegate {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgPendingUndelegate): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingUndelegate>): MsgPendingUndelegate {
    const message = createBaseMsgPendingUndelegate();
    message.zoneId = object.zoneId ?? "";
    message.delegator = object.delegator ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  }

};

function createBaseMsgPendingUndelegateResponse(): MsgPendingUndelegateResponse {
  return {
    zoneId: "",
    delegator: "",
    withdrawer: "",
    burnAsset: undefined,
    undelegateAsset: undefined
  };
}

export const MsgPendingUndelegateResponse = {
  encode(message: MsgPendingUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }

    if (message.withdrawer !== "") {
      writer.uint32(26).string(message.withdrawer);
    }

    if (message.burnAsset !== undefined) {
      Coin.encode(message.burnAsset, writer.uint32(34).fork()).ldelim();
    }

    if (message.undelegateAsset !== undefined) {
      Coin.encode(message.undelegateAsset, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingUndelegateResponse();

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
          message.withdrawer = reader.string();
          break;

        case 4:
          message.burnAsset = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.undelegateAsset = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingUndelegateResponse {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      burnAsset: isSet(object.burnAsset) ? Coin.fromJSON(object.burnAsset) : undefined,
      undelegateAsset: isSet(object.undelegateAsset) ? Coin.fromJSON(object.undelegateAsset) : undefined
    };
  },

  toJSON(message: MsgPendingUndelegateResponse): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.burnAsset !== undefined && (obj.burnAsset = message.burnAsset ? Coin.toJSON(message.burnAsset) : undefined);
    message.undelegateAsset !== undefined && (obj.undelegateAsset = message.undelegateAsset ? Coin.toJSON(message.undelegateAsset) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingUndelegateResponse>): MsgPendingUndelegateResponse {
    const message = createBaseMsgPendingUndelegateResponse();
    message.zoneId = object.zoneId ?? "";
    message.delegator = object.delegator ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.burnAsset = object.burnAsset !== undefined && object.burnAsset !== null ? Coin.fromPartial(object.burnAsset) : undefined;
    message.undelegateAsset = object.undelegateAsset !== undefined && object.undelegateAsset !== null ? Coin.fromPartial(object.undelegateAsset) : undefined;
    return message;
  }

};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    zoneId: "",
    withdrawer: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.withdrawer !== "") {
      writer.uint32(18).string(message.withdrawer);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();

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

  fromJSON(object: any): MsgWithdraw {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.zoneId = object.zoneId ?? "";
    message.withdrawer = object.withdrawer ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {
    withdrawer: "",
    withdrawAmount: ""
  };
}

export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }

    if (message.withdrawAmount !== "") {
      writer.uint32(18).string(message.withdrawAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;

        case 2:
          message.withdrawAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawResponse {
    return {
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? String(object.withdrawAmount) : ""
    };
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = message.withdrawAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.withdrawer = object.withdrawer ?? "";
    message.withdrawAmount = object.withdrawAmount ?? "";
    return message;
  }

};

function createBaseMsgClaimSnAsset(): MsgClaimSnAsset {
  return {
    zoneId: "",
    claimer: "",
    transferPortId: "",
    transferChannelId: ""
  };
}

export const MsgClaimSnAsset = {
  encode(message: MsgClaimSnAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.claimer !== "") {
      writer.uint32(18).string(message.claimer);
    }

    if (message.transferPortId !== "") {
      writer.uint32(26).string(message.transferPortId);
    }

    if (message.transferChannelId !== "") {
      writer.uint32(34).string(message.transferChannelId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSnAsset();

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

  fromJSON(object: any): MsgClaimSnAsset {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      transferPortId: isSet(object.transferPortId) ? String(object.transferPortId) : "",
      transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : ""
    };
  },

  toJSON(message: MsgClaimSnAsset): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.transferPortId !== undefined && (obj.transferPortId = message.transferPortId);
    message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimSnAsset>): MsgClaimSnAsset {
    const message = createBaseMsgClaimSnAsset();
    message.zoneId = object.zoneId ?? "";
    message.claimer = object.claimer ?? "";
    message.transferPortId = object.transferPortId ?? "";
    message.transferChannelId = object.transferChannelId ?? "";
    return message;
  }

};

function createBaseMsgClaimSnAssetResponse(): MsgClaimSnAssetResponse {
  return {
    claimer: "",
    minted: undefined
  };
}

export const MsgClaimSnAssetResponse = {
  encode(message: MsgClaimSnAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimer !== "") {
      writer.uint32(10).string(message.claimer);
    }

    if (message.minted !== undefined) {
      Coin.encode(message.minted, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimSnAssetResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.claimer = reader.string();
          break;

        case 2:
          message.minted = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgClaimSnAssetResponse {
    return {
      claimer: isSet(object.claimer) ? String(object.claimer) : "",
      minted: isSet(object.minted) ? Coin.fromJSON(object.minted) : undefined
    };
  },

  toJSON(message: MsgClaimSnAssetResponse): unknown {
    const obj: any = {};
    message.claimer !== undefined && (obj.claimer = message.claimer);
    message.minted !== undefined && (obj.minted = message.minted ? Coin.toJSON(message.minted) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimSnAssetResponse>): MsgClaimSnAssetResponse {
    const message = createBaseMsgClaimSnAssetResponse();
    message.claimer = object.claimer ?? "";
    message.minted = object.minted !== undefined && object.minted !== null ? Coin.fromPartial(object.minted) : undefined;
    return message;
  }

};

function createBaseMsgPendingWithdraw(): MsgPendingWithdraw {
  return {
    zoneId: "",
    controllerAddress: "",
    icaTransferPortId: "",
    icaTransferChannelId: "",
    chainTime: undefined
  };
}

export const MsgPendingWithdraw = {
  encode(message: MsgPendingWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zoneId !== "") {
      writer.uint32(10).string(message.zoneId);
    }

    if (message.controllerAddress !== "") {
      writer.uint32(18).string(message.controllerAddress);
    }

    if (message.icaTransferPortId !== "") {
      writer.uint32(26).string(message.icaTransferPortId);
    }

    if (message.icaTransferChannelId !== "") {
      writer.uint32(34).string(message.icaTransferChannelId);
    }

    if (message.chainTime !== undefined) {
      Timestamp.encode(toTimestamp(message.chainTime), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingWithdraw();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.zoneId = reader.string();
          break;

        case 2:
          message.controllerAddress = reader.string();
          break;

        case 3:
          message.icaTransferPortId = reader.string();
          break;

        case 4:
          message.icaTransferChannelId = reader.string();
          break;

        case 5:
          message.chainTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgPendingWithdraw {
    return {
      zoneId: isSet(object.zoneId) ? String(object.zoneId) : "",
      controllerAddress: isSet(object.controllerAddress) ? String(object.controllerAddress) : "",
      icaTransferPortId: isSet(object.icaTransferPortId) ? String(object.icaTransferPortId) : "",
      icaTransferChannelId: isSet(object.icaTransferChannelId) ? String(object.icaTransferChannelId) : "",
      chainTime: isSet(object.chainTime) ? fromJsonTimestamp(object.chainTime) : undefined
    };
  },

  toJSON(message: MsgPendingWithdraw): unknown {
    const obj: any = {};
    message.zoneId !== undefined && (obj.zoneId = message.zoneId);
    message.controllerAddress !== undefined && (obj.controllerAddress = message.controllerAddress);
    message.icaTransferPortId !== undefined && (obj.icaTransferPortId = message.icaTransferPortId);
    message.icaTransferChannelId !== undefined && (obj.icaTransferChannelId = message.icaTransferChannelId);
    message.chainTime !== undefined && (obj.chainTime = message.chainTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPendingWithdraw>): MsgPendingWithdraw {
    const message = createBaseMsgPendingWithdraw();
    message.zoneId = object.zoneId ?? "";
    message.controllerAddress = object.controllerAddress ?? "";
    message.icaTransferPortId = object.icaTransferPortId ?? "";
    message.icaTransferChannelId = object.icaTransferChannelId ?? "";
    message.chainTime = object.chainTime ?? undefined;
    return message;
  }

};

function createBaseMsgPendingWithdrawResponse(): MsgPendingWithdrawResponse {
  return {};
}

export const MsgPendingWithdrawResponse = {
  encode(_: MsgPendingWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPendingWithdrawResponse();

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

  fromJSON(_: any): MsgPendingWithdrawResponse {
    return {};
  },

  toJSON(_: MsgPendingWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPendingWithdrawResponse>): MsgPendingWithdrawResponse {
    const message = createBaseMsgPendingWithdrawResponse();
    return message;
  }

};