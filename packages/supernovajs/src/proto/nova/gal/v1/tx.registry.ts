import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeposit, MsgDelegate, MsgUndelegate, MsgPendingUndelegate, MsgWithdraw, MsgClaimSnAsset, MsgPendingWithdraw } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/nova.gal.v1.MsgDeposit", MsgDeposit], ["/nova.gal.v1.MsgDelegate", MsgDelegate], ["/nova.gal.v1.MsgUndelegate", MsgUndelegate], ["/nova.gal.v1.MsgPendingUndelegate", MsgPendingUndelegate], ["/nova.gal.v1.MsgWithdraw", MsgWithdraw], ["/nova.gal.v1.MsgClaimSnAsset", MsgClaimSnAsset], ["/nova.gal.v1.MsgPendingWithdraw", MsgPendingWithdraw]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/nova.gal.v1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgDelegate",
        value: MsgDelegate.encode(value).finish()
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgUndelegate",
        value: MsgUndelegate.encode(value).finish()
      };
    },

    pendingUndelegate(value: MsgPendingUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingUndelegate",
        value: MsgPendingUndelegate.encode(value).finish()
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgWithdraw",
        value: MsgWithdraw.encode(value).finish()
      };
    },

    claimSnAsset(value: MsgClaimSnAsset) {
      return {
        typeUrl: "/nova.gal.v1.MsgClaimSnAsset",
        value: MsgClaimSnAsset.encode(value).finish()
      };
    },

    pendingWithdraw(value: MsgPendingWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingWithdraw",
        value: MsgPendingWithdraw.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/nova.gal.v1.MsgDeposit",
        value
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgDelegate",
        value
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgUndelegate",
        value
      };
    },

    pendingUndelegate(value: MsgPendingUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingUndelegate",
        value
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgWithdraw",
        value
      };
    },

    claimSnAsset(value: MsgClaimSnAsset) {
      return {
        typeUrl: "/nova.gal.v1.MsgClaimSnAsset",
        value
      };
    },

    pendingWithdraw(value: MsgPendingWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingWithdraw",
        value
      };
    }

  },
  toJSON: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/nova.gal.v1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgDelegate",
        value: MsgDelegate.toJSON(value)
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgUndelegate",
        value: MsgUndelegate.toJSON(value)
      };
    },

    pendingUndelegate(value: MsgPendingUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingUndelegate",
        value: MsgPendingUndelegate.toJSON(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgWithdraw",
        value: MsgWithdraw.toJSON(value)
      };
    },

    claimSnAsset(value: MsgClaimSnAsset) {
      return {
        typeUrl: "/nova.gal.v1.MsgClaimSnAsset",
        value: MsgClaimSnAsset.toJSON(value)
      };
    },

    pendingWithdraw(value: MsgPendingWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingWithdraw",
        value: MsgPendingWithdraw.toJSON(value)
      };
    }

  },
  fromJSON: {
    deposit(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },

    delegate(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgDelegate",
        value: MsgDelegate.fromJSON(value)
      };
    },

    undelegate(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgUndelegate",
        value: MsgUndelegate.fromJSON(value)
      };
    },

    pendingUndelegate(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingUndelegate",
        value: MsgPendingUndelegate.fromJSON(value)
      };
    },

    withdraw(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgWithdraw",
        value: MsgWithdraw.fromJSON(value)
      };
    },

    claimSnAsset(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgClaimSnAsset",
        value: MsgClaimSnAsset.fromJSON(value)
      };
    },

    pendingWithdraw(value: any) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingWithdraw",
        value: MsgPendingWithdraw.fromJSON(value)
      };
    }

  },
  fromPartial: {
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/nova.gal.v1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },

    delegate(value: MsgDelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgDelegate",
        value: MsgDelegate.fromPartial(value)
      };
    },

    undelegate(value: MsgUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value)
      };
    },

    pendingUndelegate(value: MsgPendingUndelegate) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingUndelegate",
        value: MsgPendingUndelegate.fromPartial(value)
      };
    },

    withdraw(value: MsgWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgWithdraw",
        value: MsgWithdraw.fromPartial(value)
      };
    },

    claimSnAsset(value: MsgClaimSnAsset) {
      return {
        typeUrl: "/nova.gal.v1.MsgClaimSnAsset",
        value: MsgClaimSnAsset.fromPartial(value)
      };
    },

    pendingWithdraw(value: MsgPendingWithdraw) {
      return {
        typeUrl: "/nova.gal.v1.MsgPendingWithdraw",
        value: MsgPendingWithdraw.fromPartial(value)
      };
    }

  }
};