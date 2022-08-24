import { Rpc } from "@osmonauts/helpers";
import { MsgUpdateChainState, MsgUpdateChainStateResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    updateChainState(request: MsgUpdateChainState): Promise<MsgUpdateChainStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateChainState(request: MsgUpdateChainState): Promise<MsgUpdateChainStateResponse>;
}
