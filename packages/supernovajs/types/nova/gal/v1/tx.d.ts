import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgDelegateResponse {
}
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
export interface MsgPendingWithdrawResponse {
}
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(message: MsgDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(object: any): MsgDepositResponse;
    toJSON(message: MsgDepositResponse): unknown;
    fromPartial(object: Partial<MsgDepositResponse>): MsgDepositResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial(object: Partial<MsgDelegate>): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial(_: Partial<MsgDelegateResponse>): MsgDelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial(object: Partial<MsgUndelegate>): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial(object: Partial<MsgUndelegateResponse>): MsgUndelegateResponse;
};
export declare const MsgPendingUndelegate: {
    encode(message: MsgPendingUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegate;
    fromJSON(object: any): MsgPendingUndelegate;
    toJSON(message: MsgPendingUndelegate): unknown;
    fromPartial(object: Partial<MsgPendingUndelegate>): MsgPendingUndelegate;
};
export declare const MsgPendingUndelegateResponse: {
    encode(message: MsgPendingUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingUndelegateResponse;
    fromJSON(object: any): MsgPendingUndelegateResponse;
    toJSON(message: MsgPendingUndelegateResponse): unknown;
    fromPartial(object: Partial<MsgPendingUndelegateResponse>): MsgPendingUndelegateResponse;
};
export declare const MsgWithdraw: {
    encode(message: MsgWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw;
    fromJSON(object: any): MsgWithdraw;
    toJSON(message: MsgWithdraw): unknown;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
};
export declare const MsgWithdrawResponse: {
    encode(message: MsgWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromJSON(object: any): MsgWithdrawResponse;
    toJSON(message: MsgWithdrawResponse): unknown;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
};
export declare const MsgClaimSnAsset: {
    encode(message: MsgClaimSnAsset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAsset;
    fromJSON(object: any): MsgClaimSnAsset;
    toJSON(message: MsgClaimSnAsset): unknown;
    fromPartial(object: Partial<MsgClaimSnAsset>): MsgClaimSnAsset;
};
export declare const MsgClaimSnAssetResponse: {
    encode(message: MsgClaimSnAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimSnAssetResponse;
    fromJSON(object: any): MsgClaimSnAssetResponse;
    toJSON(message: MsgClaimSnAssetResponse): unknown;
    fromPartial(object: Partial<MsgClaimSnAssetResponse>): MsgClaimSnAssetResponse;
};
export declare const MsgPendingWithdraw: {
    encode(message: MsgPendingWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdraw;
    fromJSON(object: any): MsgPendingWithdraw;
    toJSON(message: MsgPendingWithdraw): unknown;
    fromPartial(object: Partial<MsgPendingWithdraw>): MsgPendingWithdraw;
};
export declare const MsgPendingWithdrawResponse: {
    encode(_: MsgPendingWithdrawResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPendingWithdrawResponse;
    fromJSON(_: any): MsgPendingWithdrawResponse;
    toJSON(_: MsgPendingWithdrawResponse): unknown;
    fromPartial(_: Partial<MsgPendingWithdrawResponse>): MsgPendingWithdrawResponse;
};
