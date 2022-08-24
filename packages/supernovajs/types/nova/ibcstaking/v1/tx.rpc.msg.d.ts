import { Rpc } from "@osmonauts/helpers";
import { MsgRegisterZone, MsgRegisterZoneResponse, MsgIcaDelegate, MsgIcaDelegateResponse, MsgIcaUndelegate, MsgIcaUndelegateResponse, MsgIcaTransfer, MsgIcaTransferResponse, MsgIcaAutoStaking, MsgIcaAutoStakingResponse, MsgRegisterHostAccount, MsgRegisterHostAccountResponse, MsgDeleteRegisteredZone, MsgDeleteRegisteredZoneResponse, MsgChangeRegisteredZoneInfo, MsgChangeRegisteredZoneInfoResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    registerZone(request: MsgRegisterZone): Promise<MsgRegisterZoneResponse>;
    icaDelegate(request: MsgIcaDelegate): Promise<MsgIcaDelegateResponse>;
    icaUndelegate(request: MsgIcaUndelegate): Promise<MsgIcaUndelegateResponse>;
    icaTransfer(request: MsgIcaTransfer): Promise<MsgIcaTransferResponse>;
    icaAutoStaking(request: MsgIcaAutoStaking): Promise<MsgIcaAutoStakingResponse>;
    icaRegisterHostAccount(request: MsgRegisterHostAccount): Promise<MsgRegisterHostAccountResponse>;
    deleteRegisteredZone(request: MsgDeleteRegisteredZone): Promise<MsgDeleteRegisteredZoneResponse>;
    changeRegisteredZoneInfo(request: MsgChangeRegisteredZoneInfo): Promise<MsgChangeRegisteredZoneInfoResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerZone(request: MsgRegisterZone): Promise<MsgRegisterZoneResponse>;
    icaDelegate(request: MsgIcaDelegate): Promise<MsgIcaDelegateResponse>;
    icaUndelegate(request: MsgIcaUndelegate): Promise<MsgIcaUndelegateResponse>;
    icaTransfer(request: MsgIcaTransfer): Promise<MsgIcaTransferResponse>;
    icaAutoStaking(request: MsgIcaAutoStaking): Promise<MsgIcaAutoStakingResponse>;
    icaRegisterHostAccount(request: MsgRegisterHostAccount): Promise<MsgRegisterHostAccountResponse>;
    deleteRegisteredZone(request: MsgDeleteRegisteredZone): Promise<MsgDeleteRegisteredZoneResponse>;
    changeRegisteredZoneInfo(request: MsgChangeRegisteredZoneInfo): Promise<MsgChangeRegisteredZoneInfoResponse>;
}
