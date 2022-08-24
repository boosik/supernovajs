import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
    /** params defines all the parameters of module. */
    params: Params;
}
export interface RegisteredZone {
    zoneId: string;
    icaConnectionInfo: IcaConnectionInfo;
    icaAccount: IcaAccount;
    validatorAddress: string;
    baseDenom: string;
    snDenom: string;
    decimal: Long;
}
export interface IcaAccount {
    daomodifierAddress: string;
    hostAddress: string;
    balance: Coin;
}
/** zone name, connection id, portID(owner address) */
export interface IcaConnectionInfo {
    connectionId: string;
    portId: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const RegisteredZone: {
    encode(message: RegisteredZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredZone;
    fromJSON(object: any): RegisteredZone;
    toJSON(message: RegisteredZone): unknown;
    fromPartial(object: DeepPartial<RegisteredZone>): RegisteredZone;
};
export declare const IcaAccount: {
    encode(message: IcaAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcaAccount;
    fromJSON(object: any): IcaAccount;
    toJSON(message: IcaAccount): unknown;
    fromPartial(object: DeepPartial<IcaAccount>): IcaAccount;
};
export declare const IcaConnectionInfo: {
    encode(message: IcaConnectionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IcaConnectionInfo;
    fromJSON(object: any): IcaConnectionInfo;
    toJSON(message: IcaConnectionInfo): unknown;
    fromPartial(object: DeepPartial<IcaConnectionInfo>): IcaConnectionInfo;
};
