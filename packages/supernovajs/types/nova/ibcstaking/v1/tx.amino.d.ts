import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterZone, MsgIcaDelegate, MsgIcaUndelegate, MsgIcaTransfer, MsgIcaAutoStaking, MsgRegisterHostAccount, MsgDeleteRegisteredZone, MsgChangeRegisteredZoneInfo } from "./tx";
export interface AminoMsgRegisterZone extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgRegisterZone";
    value: {
        zone_id: string;
        ica_info: {
            connection_id: string;
            port_id: string;
        };
        ica_account: {
            daomodifier_address: string;
            host_address: string;
            balance: {
                denom: string;
                amount: string;
            };
        };
        validator_address: string;
        base_denom: string;
        decimal: string;
    };
}
export interface AminoMsgIcaDelegate extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgIcaDelegate";
    value: {
        zone_id: string;
        host_address: string;
        daomodifier_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgIcaUndelegate extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgIcaUndelegate";
    value: {
        zone_id: string;
        host_address: string;
        daomodifier_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgIcaTransfer extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgIcaTransfer";
    value: {
        zone_id: string;
        host_address: string;
        daomodifier_address: string;
        receiver_address: string;
        ica_transfer_port_id: string;
        ica_transfer_channel_id: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgIcaAutoStaking extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgIcaAutoStaking";
    value: {
        zone_id: string;
        host_address: string;
        daomodifier_address: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgRegisterHostAccount extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgRegisterHostAccount";
    value: {
        zone_id: string;
        account_info: {
            daomodifier_address: string;
            host_address: string;
            balance: {
                denom: string;
                amount: string;
            };
        };
    };
}
export interface AminoMsgDeleteRegisteredZone extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgDeleteRegisteredZone";
    value: {
        zone_id: string;
        daomodifier_address: string;
    };
}
export interface AminoMsgChangeRegisteredZoneInfo extends AminoMsg {
    type: "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo";
    value: {
        zone_id: string;
        ica_info: {
            connection_id: string;
            port_id: string;
        };
        ica_account: {
            daomodifier_address: string;
            host_address: string;
            balance: {
                denom: string;
                amount: string;
            };
        };
        validator_address: string;
        base_denom: string;
        decimal: string;
    };
}
export declare const AminoConverter: {
    "/nova.ibcstaking.v1.MsgRegisterZone": {
        aminoType: string;
        toAmino: ({ zoneId, icaInfo, icaAccount, validatorAddress, baseDenom, decimal }: MsgRegisterZone) => AminoMsgRegisterZone["value"];
        fromAmino: ({ zone_id, ica_info, ica_account, validator_address, base_denom, decimal }: AminoMsgRegisterZone["value"]) => MsgRegisterZone;
    };
    "/nova.ibcstaking.v1.MsgIcaDelegate": {
        aminoType: string;
        toAmino: ({ zoneId, hostAddress, daomodifierAddress, amount }: MsgIcaDelegate) => AminoMsgIcaDelegate["value"];
        fromAmino: ({ zone_id, host_address, daomodifier_address, amount }: AminoMsgIcaDelegate["value"]) => MsgIcaDelegate;
    };
    "/nova.ibcstaking.v1.MsgIcaUndelegate": {
        aminoType: string;
        toAmino: ({ zoneId, hostAddress, daomodifierAddress, amount }: MsgIcaUndelegate) => AminoMsgIcaUndelegate["value"];
        fromAmino: ({ zone_id, host_address, daomodifier_address, amount }: AminoMsgIcaUndelegate["value"]) => MsgIcaUndelegate;
    };
    "/nova.ibcstaking.v1.MsgIcaTransfer": {
        aminoType: string;
        toAmino: ({ zoneId, hostAddress, daomodifierAddress, receiverAddress, icaTransferPortId, icaTransferChannelId, amount }: MsgIcaTransfer) => AminoMsgIcaTransfer["value"];
        fromAmino: ({ zone_id, host_address, daomodifier_address, receiver_address, ica_transfer_port_id, ica_transfer_channel_id, amount }: AminoMsgIcaTransfer["value"]) => MsgIcaTransfer;
    };
    "/nova.ibcstaking.v1.MsgIcaAutoStaking": {
        aminoType: string;
        toAmino: ({ zoneId, hostAddress, daomodifierAddress, amount }: MsgIcaAutoStaking) => AminoMsgIcaAutoStaking["value"];
        fromAmino: ({ zone_id, host_address, daomodifier_address, amount }: AminoMsgIcaAutoStaking["value"]) => MsgIcaAutoStaking;
    };
    "/nova.ibcstaking.v1.MsgRegisterHostAccount": {
        aminoType: string;
        toAmino: ({ zoneId, accountInfo }: MsgRegisterHostAccount) => AminoMsgRegisterHostAccount["value"];
        fromAmino: ({ zone_id, account_info }: AminoMsgRegisterHostAccount["value"]) => MsgRegisterHostAccount;
    };
    "/nova.ibcstaking.v1.MsgDeleteRegisteredZone": {
        aminoType: string;
        toAmino: ({ zoneId, daomodifierAddress }: MsgDeleteRegisteredZone) => AminoMsgDeleteRegisteredZone["value"];
        fromAmino: ({ zone_id, daomodifier_address }: AminoMsgDeleteRegisteredZone["value"]) => MsgDeleteRegisteredZone;
    };
    "/nova.ibcstaking.v1.MsgChangeRegisteredZoneInfo": {
        aminoType: string;
        toAmino: ({ zoneId, icaInfo, icaAccount, validatorAddress, baseDenom, decimal }: MsgChangeRegisteredZoneInfo) => AminoMsgChangeRegisteredZoneInfo["value"];
        fromAmino: ({ zone_id, ica_info, ica_account, validator_address, base_denom, decimal }: AminoMsgChangeRegisteredZoneInfo["value"]) => MsgChangeRegisteredZoneInfo;
    };
};
