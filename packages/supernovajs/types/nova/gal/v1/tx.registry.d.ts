import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgDelegate, MsgUndelegate, MsgPendingUndelegate, MsgWithdraw, MsgClaimSnAsset, MsgPendingWithdraw } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        pendingUndelegate(value: MsgPendingUndelegate): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
        claimSnAsset(value: MsgClaimSnAsset): {
            typeUrl: string;
            value: Uint8Array;
        };
        pendingWithdraw(value: MsgPendingWithdraw): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        pendingUndelegate(value: MsgPendingUndelegate): {
            typeUrl: string;
            value: MsgPendingUndelegate;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        claimSnAsset(value: MsgClaimSnAsset): {
            typeUrl: string;
            value: MsgClaimSnAsset;
        };
        pendingWithdraw(value: MsgPendingWithdraw): {
            typeUrl: string;
            value: MsgPendingWithdraw;
        };
    };
    toJSON: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: unknown;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: unknown;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: unknown;
        };
        pendingUndelegate(value: MsgPendingUndelegate): {
            typeUrl: string;
            value: unknown;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: unknown;
        };
        claimSnAsset(value: MsgClaimSnAsset): {
            typeUrl: string;
            value: unknown;
        };
        pendingWithdraw(value: MsgPendingWithdraw): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        deposit(value: any): {
            typeUrl: string;
            value: MsgDeposit;
        };
        delegate(value: any): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: any): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        pendingUndelegate(value: any): {
            typeUrl: string;
            value: MsgPendingUndelegate;
        };
        withdraw(value: any): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        claimSnAsset(value: any): {
            typeUrl: string;
            value: MsgClaimSnAsset;
        };
        pendingWithdraw(value: any): {
            typeUrl: string;
            value: MsgPendingWithdraw;
        };
    };
    fromPartial: {
        deposit(value: MsgDeposit): {
            typeUrl: string;
            value: MsgDeposit;
        };
        delegate(value: MsgDelegate): {
            typeUrl: string;
            value: MsgDelegate;
        };
        undelegate(value: MsgUndelegate): {
            typeUrl: string;
            value: MsgUndelegate;
        };
        pendingUndelegate(value: MsgPendingUndelegate): {
            typeUrl: string;
            value: MsgPendingUndelegate;
        };
        withdraw(value: MsgWithdraw): {
            typeUrl: string;
            value: MsgWithdraw;
        };
        claimSnAsset(value: MsgClaimSnAsset): {
            typeUrl: string;
            value: MsgClaimSnAsset;
        };
        pendingWithdraw(value: MsgPendingWithdraw): {
            typeUrl: string;
            value: MsgPendingWithdraw;
        };
    };
};
