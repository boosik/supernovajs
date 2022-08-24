import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as novaGalV1TxRegistry from "./gal/v1/tx.registry";
import * as novaIbcstakingV1TxRegistry from "./ibcstaking/v1/tx.registry";
import * as novaOracleV1TxRegistry from "./oracle/v1/tx.registry";
import * as novaGalV1TxAmino from "./gal/v1/tx.amino";
import * as novaIbcstakingV1TxAmino from "./ibcstaking/v1/tx.amino";
import * as novaOracleV1TxAmino from "./oracle/v1/tx.amino";
export const getSigningNovaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...novaGalV1TxRegistry.registry, ...novaIbcstakingV1TxRegistry.registry, ...novaOracleV1TxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...novaGalV1TxAmino.AminoConverter,
    ...novaIbcstakingV1TxAmino.AminoConverter,
    ...novaOracleV1TxAmino.AminoConverter
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningNovaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningNovaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};