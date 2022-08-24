import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateChainState } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateChainState(value: MsgUpdateChainState): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateChainState(value: MsgUpdateChainState): {
            typeUrl: string;
            value: MsgUpdateChainState;
        };
    };
    toJSON: {
        updateChainState(value: MsgUpdateChainState): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        updateChainState(value: any): {
            typeUrl: string;
            value: MsgUpdateChainState;
        };
    };
    fromPartial: {
        updateChainState(value: MsgUpdateChainState): {
            typeUrl: string;
            value: MsgUpdateChainState;
        };
    };
};
