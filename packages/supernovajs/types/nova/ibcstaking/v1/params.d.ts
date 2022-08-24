import * as _m0 from "protobufjs/minimal";
export interface Params {
    /** zone register address. */
    daoModifiers: string[];
    commission: CommissionInfo[];
}
export interface CommissionInfo {
    treasuryAddress: string;
    commissionRate: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const CommissionInfo: {
    encode(message: CommissionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommissionInfo;
    fromJSON(object: any): CommissionInfo;
    toJSON(message: CommissionInfo): unknown;
    fromPartial(object: Partial<CommissionInfo>): CommissionInfo;
};
