import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterZone, MsgIcaDelegate, MsgIcaUndelegate, MsgIcaTransfer, MsgIcaAutoStaking, MsgRegisterHostAccount, MsgDeleteRegisteredZone, MsgChangeRegisteredZoneInfo } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerZone(value: MsgRegisterZone): {
            typeUrl: string;
            value: Uint8Array;
        };
        icaDelegate(value: MsgIcaDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        icaUndelegate(value: MsgIcaUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        icaTransfer(value: MsgIcaTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        icaAutoStaking(value: MsgIcaAutoStaking): {
            typeUrl: string;
            value: Uint8Array;
        };
        icaRegisterHostAccount(value: MsgRegisterHostAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRegisteredZone(value: MsgDeleteRegisteredZone): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerZone(value: MsgRegisterZone): {
            typeUrl: string;
            value: MsgRegisterZone;
        };
        icaDelegate(value: MsgIcaDelegate): {
            typeUrl: string;
            value: MsgIcaDelegate;
        };
        icaUndelegate(value: MsgIcaUndelegate): {
            typeUrl: string;
            value: MsgIcaUndelegate;
        };
        icaTransfer(value: MsgIcaTransfer): {
            typeUrl: string;
            value: MsgIcaTransfer;
        };
        icaAutoStaking(value: MsgIcaAutoStaking): {
            typeUrl: string;
            value: MsgIcaAutoStaking;
        };
        icaRegisterHostAccount(value: MsgRegisterHostAccount): {
            typeUrl: string;
            value: MsgRegisterHostAccount;
        };
        deleteRegisteredZone(value: MsgDeleteRegisteredZone): {
            typeUrl: string;
            value: MsgDeleteRegisteredZone;
        };
        changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo): {
            typeUrl: string;
            value: MsgChangeRegisteredZoneInfo;
        };
    };
    toJSON: {
        registerZone(value: MsgRegisterZone): {
            typeUrl: string;
            value: unknown;
        };
        icaDelegate(value: MsgIcaDelegate): {
            typeUrl: string;
            value: unknown;
        };
        icaUndelegate(value: MsgIcaUndelegate): {
            typeUrl: string;
            value: unknown;
        };
        icaTransfer(value: MsgIcaTransfer): {
            typeUrl: string;
            value: unknown;
        };
        icaAutoStaking(value: MsgIcaAutoStaking): {
            typeUrl: string;
            value: unknown;
        };
        icaRegisterHostAccount(value: MsgRegisterHostAccount): {
            typeUrl: string;
            value: unknown;
        };
        deleteRegisteredZone(value: MsgDeleteRegisteredZone): {
            typeUrl: string;
            value: unknown;
        };
        changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerZone(value: any): {
            typeUrl: string;
            value: MsgRegisterZone;
        };
        icaDelegate(value: any): {
            typeUrl: string;
            value: MsgIcaDelegate;
        };
        icaUndelegate(value: any): {
            typeUrl: string;
            value: MsgIcaUndelegate;
        };
        icaTransfer(value: any): {
            typeUrl: string;
            value: MsgIcaTransfer;
        };
        icaAutoStaking(value: any): {
            typeUrl: string;
            value: MsgIcaAutoStaking;
        };
        icaRegisterHostAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterHostAccount;
        };
        deleteRegisteredZone(value: any): {
            typeUrl: string;
            value: MsgDeleteRegisteredZone;
        };
        changeRegisteredZoneInfo(value: any): {
            typeUrl: string;
            value: MsgChangeRegisteredZoneInfo;
        };
    };
    fromPartial: {
        registerZone(value: MsgRegisterZone): {
            typeUrl: string;
            value: MsgRegisterZone;
        };
        icaDelegate(value: MsgIcaDelegate): {
            typeUrl: string;
            value: MsgIcaDelegate;
        };
        icaUndelegate(value: MsgIcaUndelegate): {
            typeUrl: string;
            value: MsgIcaUndelegate;
        };
        icaTransfer(value: MsgIcaTransfer): {
            typeUrl: string;
            value: MsgIcaTransfer;
        };
        icaAutoStaking(value: MsgIcaAutoStaking): {
            typeUrl: string;
            value: MsgIcaAutoStaking;
        };
        icaRegisterHostAccount(value: MsgRegisterHostAccount): {
            typeUrl: string;
            value: MsgRegisterHostAccount;
        };
        deleteRegisteredZone(value: MsgDeleteRegisteredZone): {
            typeUrl: string;
            value: MsgDeleteRegisteredZone;
        };
        changeRegisteredZoneInfo(value: MsgChangeRegisteredZoneInfo): {
            typeUrl: string;
            value: MsgChangeRegisteredZoneInfo;
        };
    };
};
