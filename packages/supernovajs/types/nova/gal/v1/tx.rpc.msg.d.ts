import { Rpc } from "@osmonauts/helpers";
import { MsgDeposit, MsgDepositResponse, MsgDelegate, MsgDelegateResponse, MsgUndelegate, MsgUndelegateResponse, MsgPendingUndelegate, MsgPendingUndelegateResponse, MsgWithdraw, MsgWithdrawResponse, MsgClaimSnAsset, MsgClaimSnAssetResponse, MsgPendingWithdraw, MsgPendingWithdrawResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    pendingUndelegate(request: MsgPendingUndelegate): Promise<MsgPendingUndelegateResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    claimSnAsset(request: MsgClaimSnAsset): Promise<MsgClaimSnAssetResponse>;
    pendingWithdraw(request: MsgPendingWithdraw): Promise<MsgPendingWithdrawResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    pendingUndelegate(request: MsgPendingUndelegate): Promise<MsgPendingUndelegateResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    claimSnAsset(request: MsgClaimSnAsset): Promise<MsgClaimSnAssetResponse>;
    pendingWithdraw(request: MsgPendingWithdraw): Promise<MsgPendingWithdrawResponse>;
}
