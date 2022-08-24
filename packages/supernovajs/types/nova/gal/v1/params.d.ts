import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Params_WhiteListedTokenDenomsEntry {
    key: string;
    value: string;
}
/** Params defines the parameters for the gal module. */
export interface Params {
    /** white-listed tokens in nova */
    whiteListedTokenDenoms: {
        [key: string]: string;
    };
    /** expected blocks per year */
    blocksPerYear: Long;
}
export declare const Params_WhiteListedTokenDenomsEntry: {
    encode(message: Params_WhiteListedTokenDenomsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params_WhiteListedTokenDenomsEntry;
    fromJSON(object: any): Params_WhiteListedTokenDenomsEntry;
    toJSON(message: Params_WhiteListedTokenDenomsEntry): unknown;
    fromPartial(object: Partial<Params_WhiteListedTokenDenomsEntry>): Params_WhiteListedTokenDenomsEntry;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
