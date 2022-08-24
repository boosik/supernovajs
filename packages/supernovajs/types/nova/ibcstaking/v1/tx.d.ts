import { IcaConnectionInfo, IcaAccount } from "./genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** MsgRegisterZone defines the payload for Msg/RegisterZone */
export interface MsgRegisterZone {
    zoneId: string;
    icaInfo: IcaConnectionInfo;
    icaAccount: IcaAccount;
    validatorAddress: string;
    baseDenom: string;
    decimal: Long;
}
export interface MsgRegisterZoneResponse {
}
export interface MsgChangeRegisteredZoneInfo {
    zoneId: string;
    icaInfo: IcaConnectionInfo;
    icaAccount: IcaAccount;
    validatorAddress: string;
    baseDenom: string;
    decimal: Long;
}
export interface MsgChangeRegisteredZoneInfoResponse {
}
export interface MsgDeleteRegisteredZone {
    zoneId: string;
    daomodifierAddress: string;
}
export interface MsgDeleteRegisteredZoneResponse {
}
export interface MsgIcaDelegate {
    zoneId: string;
    hostAddress: string;
    daomodifierAddress: string;
    amount: Coin;
}
export interface MsgIcaDelegateResponse {
}
export interface MsgIcaUndelegate {
    zoneId: string;
    hostAddress: string;
    daomodifierAddress: string;
    amount: Coin;
}
export interface MsgIcaUndelegateResponse {
}
export interface MsgIcaAutoStaking {
    zoneId: string;
    hostAddress: string;
    daomodifierAddress: string;
    amount: Coin;
}
export interface MsgIcaAutoStakingResponse {
}
export interface MsgIcaTransfer {
    zoneId: string;
    hostAddress: string;
    daomodifierAddress: string;
    receiverAddress: string;
    icaTransferPortId: string;
    icaTransferChannelId: string;
    amount: Coin;
}
export interface MsgIcaTransferResponse {
}
export interface MsgRegisterHostAccount {
    zoneId: string;
    accountInfo: IcaAccount;
}
export interface MsgRegisterHostAccountResponse {
}
export declare const MsgRegisterZone: {
    encode(message: MsgRegisterZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterZone;
    fromJSON(object: any): MsgRegisterZone;
    toJSON(message: MsgRegisterZone): unknown;
    fromPartial(object: DeepPartial<MsgRegisterZone>): MsgRegisterZone;
};
export declare const MsgRegisterZoneResponse: {
    encode(_: MsgRegisterZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterZoneResponse;
    fromJSON(_: any): MsgRegisterZoneResponse;
    toJSON(_: MsgRegisterZoneResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterZoneResponse>): MsgRegisterZoneResponse;
};
export declare const MsgChangeRegisteredZoneInfo: {
    encode(message: MsgChangeRegisteredZoneInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRegisteredZoneInfo;
    fromJSON(object: any): MsgChangeRegisteredZoneInfo;
    toJSON(message: MsgChangeRegisteredZoneInfo): unknown;
    fromPartial(object: DeepPartial<MsgChangeRegisteredZoneInfo>): MsgChangeRegisteredZoneInfo;
};
export declare const MsgChangeRegisteredZoneInfoResponse: {
    encode(_: MsgChangeRegisteredZoneInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeRegisteredZoneInfoResponse;
    fromJSON(_: any): MsgChangeRegisteredZoneInfoResponse;
    toJSON(_: MsgChangeRegisteredZoneInfoResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeRegisteredZoneInfoResponse>): MsgChangeRegisteredZoneInfoResponse;
};
export declare const MsgDeleteRegisteredZone: {
    encode(message: MsgDeleteRegisteredZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegisteredZone;
    fromJSON(object: any): MsgDeleteRegisteredZone;
    toJSON(message: MsgDeleteRegisteredZone): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRegisteredZone>): MsgDeleteRegisteredZone;
};
export declare const MsgDeleteRegisteredZoneResponse: {
    encode(_: MsgDeleteRegisteredZoneResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRegisteredZoneResponse;
    fromJSON(_: any): MsgDeleteRegisteredZoneResponse;
    toJSON(_: MsgDeleteRegisteredZoneResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRegisteredZoneResponse>): MsgDeleteRegisteredZoneResponse;
};
export declare const MsgIcaDelegate: {
    encode(message: MsgIcaDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaDelegate;
    fromJSON(object: any): MsgIcaDelegate;
    toJSON(message: MsgIcaDelegate): unknown;
    fromPartial(object: DeepPartial<MsgIcaDelegate>): MsgIcaDelegate;
};
export declare const MsgIcaDelegateResponse: {
    encode(_: MsgIcaDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaDelegateResponse;
    fromJSON(_: any): MsgIcaDelegateResponse;
    toJSON(_: MsgIcaDelegateResponse): unknown;
    fromPartial(_: DeepPartial<MsgIcaDelegateResponse>): MsgIcaDelegateResponse;
};
export declare const MsgIcaUndelegate: {
    encode(message: MsgIcaUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaUndelegate;
    fromJSON(object: any): MsgIcaUndelegate;
    toJSON(message: MsgIcaUndelegate): unknown;
    fromPartial(object: DeepPartial<MsgIcaUndelegate>): MsgIcaUndelegate;
};
export declare const MsgIcaUndelegateResponse: {
    encode(_: MsgIcaUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaUndelegateResponse;
    fromJSON(_: any): MsgIcaUndelegateResponse;
    toJSON(_: MsgIcaUndelegateResponse): unknown;
    fromPartial(_: DeepPartial<MsgIcaUndelegateResponse>): MsgIcaUndelegateResponse;
};
export declare const MsgIcaAutoStaking: {
    encode(message: MsgIcaAutoStaking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaAutoStaking;
    fromJSON(object: any): MsgIcaAutoStaking;
    toJSON(message: MsgIcaAutoStaking): unknown;
    fromPartial(object: DeepPartial<MsgIcaAutoStaking>): MsgIcaAutoStaking;
};
export declare const MsgIcaAutoStakingResponse: {
    encode(_: MsgIcaAutoStakingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaAutoStakingResponse;
    fromJSON(_: any): MsgIcaAutoStakingResponse;
    toJSON(_: MsgIcaAutoStakingResponse): unknown;
    fromPartial(_: DeepPartial<MsgIcaAutoStakingResponse>): MsgIcaAutoStakingResponse;
};
export declare const MsgIcaTransfer: {
    encode(message: MsgIcaTransfer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaTransfer;
    fromJSON(object: any): MsgIcaTransfer;
    toJSON(message: MsgIcaTransfer): unknown;
    fromPartial(object: DeepPartial<MsgIcaTransfer>): MsgIcaTransfer;
};
export declare const MsgIcaTransferResponse: {
    encode(_: MsgIcaTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIcaTransferResponse;
    fromJSON(_: any): MsgIcaTransferResponse;
    toJSON(_: MsgIcaTransferResponse): unknown;
    fromPartial(_: DeepPartial<MsgIcaTransferResponse>): MsgIcaTransferResponse;
};
export declare const MsgRegisterHostAccount: {
    encode(message: MsgRegisterHostAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostAccount;
    fromJSON(object: any): MsgRegisterHostAccount;
    toJSON(message: MsgRegisterHostAccount): unknown;
    fromPartial(object: DeepPartial<MsgRegisterHostAccount>): MsgRegisterHostAccount;
};
export declare const MsgRegisterHostAccountResponse: {
    encode(_: MsgRegisterHostAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterHostAccountResponse;
    fromJSON(_: any): MsgRegisterHostAccountResponse;
    toJSON(_: MsgRegisterHostAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterHostAccountResponse>): MsgRegisterHostAccountResponse;
};
