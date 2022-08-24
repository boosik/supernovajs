import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateChainState } from "./tx";
export interface AminoMsgUpdateChainState extends AminoMsg {
    type: "/nova.oracle.v1.MsgUpdateChainState";
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        operator: string;
        block_height: string;
        app_hash: Uint8Array;
        chain_id: string;
    };
}
export declare const AminoConverter: {
    "/nova.oracle.v1.MsgUpdateChainState": {
        aminoType: string;
        toAmino: ({ coin, operator, blockHeight, appHash, chainId }: MsgUpdateChainState) => AminoMsgUpdateChainState["value"];
        fromAmino: ({ coin, operator, block_height, app_hash, chain_id }: AminoMsgUpdateChainState["value"]) => MsgUpdateChainState;
    };
};
