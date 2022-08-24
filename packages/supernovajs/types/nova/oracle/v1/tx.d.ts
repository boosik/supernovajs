import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgUpdateChainState {
    /** coin refers to the sum of owned, staked and claimable quantity of the coin */
    coin: Coin;
    /** address of the oracle */
    operator: string;
    /** block_height of the block fetched by oracle from host_chain */
    blockHeight: Long;
    /** app_hash of the block fetched by oracle from host chain */
    appHash: Uint8Array;
    /** chain_id of the host chain */
    chainId: string;
}
export interface MsgUpdateChainStateResponse {
    success: boolean;
}
export declare const MsgUpdateChainState: {
    encode(message: MsgUpdateChainState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainState;
    fromJSON(object: any): MsgUpdateChainState;
    toJSON(message: MsgUpdateChainState): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChainState>): MsgUpdateChainState;
};
export declare const MsgUpdateChainStateResponse: {
    encode(message: MsgUpdateChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainStateResponse;
    fromJSON(object: any): MsgUpdateChainStateResponse;
    toJSON(message: MsgUpdateChainStateResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChainStateResponse>): MsgUpdateChainStateResponse;
};
