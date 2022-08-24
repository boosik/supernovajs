import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface GenesisState {
    /** params defines all the parameters of module. */
    params: Params;
    /** states is an amount of coins on the host chain. */
    states: ChainInfo[];
}
export interface ChainInfo {
    /** coin refers to the sum of owned, staked and claimable quantity of the coin */
    coin: Coin;
    /** operator_address is an oracle operator's address */
    operatorAddress: string;
    /** last_block_height is the block height observed by the operator on the host chain. */
    lastBlockHeight: Long;
    /** app_hash of the block fetched by oracle from host chain */
    appHash: Uint8Array;
    /** chain_id of the host chain */
    chainId: string;
    oracleVersion: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ChainInfo: {
    encode(message: ChainInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainInfo;
    fromJSON(object: any): ChainInfo;
    toJSON(message: ChainInfo): unknown;
    fromPartial(object: DeepPartial<ChainInfo>): ChainInfo;
};
