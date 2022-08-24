import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgDelegate, MsgUndelegate, MsgPendingUndelegate, MsgWithdraw, MsgClaimSnAsset, MsgPendingWithdraw } from "./tx";
export interface AminoMsgDeposit extends AminoMsg {
    type: "/nova.gal.v1.MsgDeposit";
    value: {
        zone_id: string;
        depositor: string;
        claimer: string;
        amount: {
            denom: string;
            amount: string;
        };
        transfer_port_id: string;
        transfer_channel_id: string;
    };
}
export interface AminoMsgDelegate extends AminoMsg {
    type: "/nova.gal.v1.MsgDelegate";
    value: {
        zone_id: string;
        controller_address: string;
        transfer_port_id: string;
        transfer_channel_id: string;
    };
}
export interface AminoMsgUndelegate extends AminoMsg {
    type: "/nova.gal.v1.MsgUndelegate";
    value: {
        zone_id: string;
        controller_address: string;
    };
}
export interface AminoMsgPendingUndelegate extends AminoMsg {
    type: "/nova.gal.v1.MsgPendingUndelegate";
    value: {
        zone_id: string;
        delegator: string;
        withdrawer: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgWithdraw extends AminoMsg {
    type: "/nova.gal.v1.MsgWithdraw";
    value: {
        zone_id: string;
        withdrawer: string;
        transfer_port_id: string;
        transfer_channel_id: string;
    };
}
export interface AminoMsgClaimSnAsset extends AminoMsg {
    type: "/nova.gal.v1.MsgClaimSnAsset";
    value: {
        zone_id: string;
        claimer: string;
        transfer_port_id: string;
        transfer_channel_id: string;
    };
}
export interface AminoMsgPendingWithdraw extends AminoMsg {
    type: "/nova.gal.v1.MsgPendingWithdraw";
    value: {
        zone_id: string;
        controller_address: string;
        ica_transfer_port_id: string;
        ica_transfer_channel_id: string;
        chain_time: {
            seconds: string;
            nanos: number;
        };
    };
}
export declare const AminoConverter: {
    "/nova.gal.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ zoneId, depositor, claimer, amount, transferPortId, transferChannelId }: MsgDeposit) => AminoMsgDeposit["value"];
        fromAmino: ({ zone_id, depositor, claimer, amount, transfer_port_id, transfer_channel_id }: AminoMsgDeposit["value"]) => MsgDeposit;
    };
    "/nova.gal.v1.MsgDelegate": {
        aminoType: string;
        toAmino: ({ zoneId, controllerAddress, transferPortId, transferChannelId }: MsgDelegate) => AminoMsgDelegate["value"];
        fromAmino: ({ zone_id, controller_address, transfer_port_id, transfer_channel_id }: AminoMsgDelegate["value"]) => MsgDelegate;
    };
    "/nova.gal.v1.MsgUndelegate": {
        aminoType: string;
        toAmino: ({ zoneId, controllerAddress }: MsgUndelegate) => AminoMsgUndelegate["value"];
        fromAmino: ({ zone_id, controller_address }: AminoMsgUndelegate["value"]) => MsgUndelegate;
    };
    "/nova.gal.v1.MsgPendingUndelegate": {
        aminoType: string;
        toAmino: ({ zoneId, delegator, withdrawer, amount }: MsgPendingUndelegate) => AminoMsgPendingUndelegate["value"];
        fromAmino: ({ zone_id, delegator, withdrawer, amount }: AminoMsgPendingUndelegate["value"]) => MsgPendingUndelegate;
    };
    "/nova.gal.v1.MsgWithdraw": {
        aminoType: string;
        toAmino: ({ zoneId, withdrawer, transferPortId, transferChannelId }: MsgWithdraw) => AminoMsgWithdraw["value"];
        fromAmino: ({ zone_id, withdrawer, transfer_port_id, transfer_channel_id }: AminoMsgWithdraw["value"]) => MsgWithdraw;
    };
    "/nova.gal.v1.MsgClaimSnAsset": {
        aminoType: string;
        toAmino: ({ zoneId, claimer, transferPortId, transferChannelId }: MsgClaimSnAsset) => AminoMsgClaimSnAsset["value"];
        fromAmino: ({ zone_id, claimer, transfer_port_id, transfer_channel_id }: AminoMsgClaimSnAsset["value"]) => MsgClaimSnAsset;
    };
    "/nova.gal.v1.MsgPendingWithdraw": {
        aminoType: string;
        toAmino: ({ zoneId, controllerAddress, icaTransferPortId, icaTransferChannelId, chainTime }: MsgPendingWithdraw) => AminoMsgPendingWithdraw["value"];
        fromAmino: ({ zone_id, controller_address, ica_transfer_port_id, ica_transfer_channel_id, chain_time }: AminoMsgPendingWithdraw["value"]) => MsgPendingWithdraw;
    };
};
