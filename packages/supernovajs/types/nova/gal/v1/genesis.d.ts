import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const DepositAccount: {
    encode(message: DepositAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositAccount;
    fromJSON(object: any): DepositAccount;
    toJSON(message: DepositAccount): unknown;
    fromPartial(object: DeepPartial<DepositAccount>): DepositAccount;
};
export declare const DepositInfo: {
    encode(message: DepositInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfo;
    fromJSON(object: any): DepositInfo;
    toJSON(message: DepositInfo): unknown;
    fromPartial(object: DeepPartial<DepositInfo>): DepositInfo;
};
export declare const WithdrawInfo: {
    encode(message: WithdrawInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawInfo;
    fromJSON(object: any): WithdrawInfo;
    toJSON(message: WithdrawInfo): unknown;
    fromPartial(object: DeepPartial<WithdrawInfo>): WithdrawInfo;
};
export declare const RecordInfo: {
    encode(message: RecordInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RecordInfo;
    fromJSON(object: any): RecordInfo;
    toJSON(message: RecordInfo): unknown;
    fromPartial(object: DeepPartial<RecordInfo>): RecordInfo;
};
export declare const DepositRecord: {
    encode(message: DepositRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecord;
    fromJSON(object: any): DepositRecord;
    toJSON(message: DepositRecord): unknown;
    fromPartial(object: DeepPartial<DepositRecord>): DepositRecord;
};
export declare const DepositRecordContent: {
    encode(message: DepositRecordContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositRecordContent;
    fromJSON(object: any): DepositRecordContent;
    toJSON(message: DepositRecordContent): unknown;
    fromPartial(object: DeepPartial<DepositRecordContent>): DepositRecordContent;
};
export declare const UndelegateRecord: {
    encode(message: UndelegateRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateRecord;
    fromJSON(object: any): UndelegateRecord;
    toJSON(message: UndelegateRecord): unknown;
    fromPartial(object: DeepPartial<UndelegateRecord>): UndelegateRecord;
};
export declare const UndelegateRecordContent: {
    encode(message: UndelegateRecordContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateRecordContent;
    fromJSON(object: any): UndelegateRecordContent;
    toJSON(message: UndelegateRecordContent): unknown;
    fromPartial(object: DeepPartial<UndelegateRecordContent>): UndelegateRecordContent;
};
export declare const WithdrawRecord_RecordsEntry: {
    encode(message: WithdrawRecord_RecordsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecord_RecordsEntry;
    fromJSON(object: any): WithdrawRecord_RecordsEntry;
    toJSON(message: WithdrawRecord_RecordsEntry): unknown;
    fromPartial(object: DeepPartial<WithdrawRecord_RecordsEntry>): WithdrawRecord_RecordsEntry;
};
export declare const WithdrawRecord: {
    encode(message: WithdrawRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecord;
    fromJSON(object: any): WithdrawRecord;
    toJSON(message: WithdrawRecord): unknown;
    fromPartial(object: DeepPartial<WithdrawRecord>): WithdrawRecord;
};
export declare const WithdrawRecordContent: {
    encode(message: WithdrawRecordContent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRecordContent;
    fromJSON(object: any): WithdrawRecordContent;
    toJSON(message: WithdrawRecordContent): unknown;
    fromPartial(object: DeepPartial<WithdrawRecordContent>): WithdrawRecordContent;
};
