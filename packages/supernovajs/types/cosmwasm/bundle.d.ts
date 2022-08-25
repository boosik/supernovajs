import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _208 from "./wasm/v1/query.lcd";
import * as _209 from "./wasm/v1/query.rpc.query";
import * as _210 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _210.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            LCDQueryClient: typeof _208.LCDQueryClient;
            accessTypeFromJSON(object: any): _99.AccessType;
            accessTypeToJSON(object: _99.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _99.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _99.ContractCodeHistoryOperationType): string;
            AccessType: typeof _99.AccessType;
            ContractCodeHistoryOperationType: typeof _99.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _99.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessTypeParam;
                fromJSON(object: any): _99.AccessTypeParam;
                toJSON(message: _99.AccessTypeParam): unknown;
                fromPartial(object: Partial<_99.AccessTypeParam>): _99.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _99.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AccessConfig;
                fromJSON(object: any): _99.AccessConfig;
                toJSON(message: _99.AccessConfig): unknown;
                fromPartial(object: Partial<_99.AccessConfig>): _99.AccessConfig;
            };
            Params: {
                encode(message: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromJSON(object: any): _99.Params;
                toJSON(message: _99.Params): unknown;
                fromPartial(object: Partial<_99.Params>): _99.Params;
            };
            CodeInfo: {
                encode(message: _99.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.CodeInfo;
                fromJSON(object: any): _99.CodeInfo;
                toJSON(message: _99.CodeInfo): unknown;
                fromPartial(object: Partial<_99.CodeInfo>): _99.CodeInfo;
            };
            ContractInfo: {
                encode(message: _99.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractInfo;
                fromJSON(object: any): _99.ContractInfo;
                toJSON(message: _99.ContractInfo): unknown;
                fromPartial(object: Partial<_99.ContractInfo>): _99.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _99.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContractCodeHistoryEntry;
                fromJSON(object: any): _99.ContractCodeHistoryEntry;
                toJSON(message: _99.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_99.ContractCodeHistoryEntry>): _99.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _99.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.AbsoluteTxPosition;
                fromJSON(object: any): _99.AbsoluteTxPosition;
                toJSON(message: _99.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_99.AbsoluteTxPosition>): _99.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _99.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Model;
                fromJSON(object: any): _99.Model;
                toJSON(message: _99.Model): unknown;
                fromPartial(object: Partial<_99.Model>): _99.Model;
            };
            MsgStoreCode: {
                encode(message: _98.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCode;
                fromJSON(object: any): _98.MsgStoreCode;
                toJSON(message: _98.MsgStoreCode): unknown;
                fromPartial(object: Partial<_98.MsgStoreCode>): _98.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _98.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgStoreCodeResponse;
                fromJSON(object: any): _98.MsgStoreCodeResponse;
                toJSON(message: _98.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_98.MsgStoreCodeResponse>): _98.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _98.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContract;
                fromJSON(object: any): _98.MsgInstantiateContract;
                toJSON(message: _98.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_98.MsgInstantiateContract>): _98.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _98.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgInstantiateContractResponse;
                fromJSON(object: any): _98.MsgInstantiateContractResponse;
                toJSON(message: _98.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgInstantiateContractResponse>): _98.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _98.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContract;
                fromJSON(object: any): _98.MsgExecuteContract;
                toJSON(message: _98.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_98.MsgExecuteContract>): _98.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _98.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgExecuteContractResponse;
                fromJSON(object: any): _98.MsgExecuteContractResponse;
                toJSON(message: _98.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgExecuteContractResponse>): _98.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _98.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContract;
                fromJSON(object: any): _98.MsgMigrateContract;
                toJSON(message: _98.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_98.MsgMigrateContract>): _98.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _98.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgMigrateContractResponse;
                fromJSON(object: any): _98.MsgMigrateContractResponse;
                toJSON(message: _98.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_98.MsgMigrateContractResponse>): _98.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _98.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdmin;
                fromJSON(object: any): _98.MsgUpdateAdmin;
                toJSON(message: _98.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_98.MsgUpdateAdmin>): _98.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _98.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgUpdateAdminResponse;
                fromJSON(_: any): _98.MsgUpdateAdminResponse;
                toJSON(_: _98.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_98.MsgUpdateAdminResponse>): _98.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _98.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdmin;
                fromJSON(object: any): _98.MsgClearAdmin;
                toJSON(message: _98.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_98.MsgClearAdmin>): _98.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _98.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgClearAdminResponse;
                fromJSON(_: any): _98.MsgClearAdminResponse;
                toJSON(_: _98.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_98.MsgClearAdminResponse>): _98.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _97.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoRequest;
                fromJSON(object: any): _97.QueryContractInfoRequest;
                toJSON(message: _97.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractInfoRequest>): _97.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _97.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractInfoResponse;
                fromJSON(object: any): _97.QueryContractInfoResponse;
                toJSON(message: _97.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractInfoResponse>): _97.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _97.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryRequest;
                fromJSON(object: any): _97.QueryContractHistoryRequest;
                toJSON(message: _97.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractHistoryRequest>): _97.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _97.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractHistoryResponse;
                fromJSON(object: any): _97.QueryContractHistoryResponse;
                toJSON(message: _97.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractHistoryResponse>): _97.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _97.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeRequest;
                fromJSON(object: any): _97.QueryContractsByCodeRequest;
                toJSON(message: _97.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_97.QueryContractsByCodeRequest>): _97.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _97.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryContractsByCodeResponse;
                fromJSON(object: any): _97.QueryContractsByCodeResponse;
                toJSON(message: _97.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_97.QueryContractsByCodeResponse>): _97.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _97.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateRequest;
                fromJSON(object: any): _97.QueryAllContractStateRequest;
                toJSON(message: _97.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QueryAllContractStateRequest>): _97.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _97.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllContractStateResponse;
                fromJSON(object: any): _97.QueryAllContractStateResponse;
                toJSON(message: _97.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QueryAllContractStateResponse>): _97.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _97.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateRequest;
                fromJSON(object: any): _97.QueryRawContractStateRequest;
                toJSON(message: _97.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QueryRawContractStateRequest>): _97.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _97.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryRawContractStateResponse;
                fromJSON(object: any): _97.QueryRawContractStateResponse;
                toJSON(message: _97.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QueryRawContractStateResponse>): _97.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _97.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateRequest;
                fromJSON(object: any): _97.QuerySmartContractStateRequest;
                toJSON(message: _97.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_97.QuerySmartContractStateRequest>): _97.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _97.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QuerySmartContractStateResponse;
                fromJSON(object: any): _97.QuerySmartContractStateResponse;
                toJSON(message: _97.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_97.QuerySmartContractStateResponse>): _97.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _97.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeRequest;
                fromJSON(object: any): _97.QueryCodeRequest;
                toJSON(message: _97.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_97.QueryCodeRequest>): _97.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _97.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CodeInfoResponse;
                fromJSON(object: any): _97.CodeInfoResponse;
                toJSON(message: _97.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_97.CodeInfoResponse>): _97.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _97.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodeResponse;
                fromJSON(object: any): _97.QueryCodeResponse;
                toJSON(message: _97.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_97.QueryCodeResponse>): _97.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _97.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesRequest;
                fromJSON(object: any): _97.QueryCodesRequest;
                toJSON(message: _97.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_97.QueryCodesRequest>): _97.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _97.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCodesResponse;
                fromJSON(object: any): _97.QueryCodesResponse;
                toJSON(message: _97.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_97.QueryCodesResponse>): _97.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _97.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesRequest;
                fromJSON(object: any): _97.QueryPinnedCodesRequest;
                toJSON(message: _97.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_97.QueryPinnedCodesRequest>): _97.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _97.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryPinnedCodesResponse;
                fromJSON(object: any): _97.QueryPinnedCodesResponse;
                toJSON(message: _97.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_97.QueryPinnedCodesResponse>): _97.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _96.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.StoreCodeProposal;
                fromJSON(object: any): _96.StoreCodeProposal;
                toJSON(message: _96.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_96.StoreCodeProposal>): _96.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _96.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.InstantiateContractProposal;
                fromJSON(object: any): _96.InstantiateContractProposal;
                toJSON(message: _96.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_96.InstantiateContractProposal>): _96.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _96.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MigrateContractProposal;
                fromJSON(object: any): _96.MigrateContractProposal;
                toJSON(message: _96.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_96.MigrateContractProposal>): _96.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _96.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SudoContractProposal;
                fromJSON(object: any): _96.SudoContractProposal;
                toJSON(message: _96.SudoContractProposal): unknown;
                fromPartial(object: Partial<_96.SudoContractProposal>): _96.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _96.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ExecuteContractProposal;
                fromJSON(object: any): _96.ExecuteContractProposal;
                toJSON(message: _96.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_96.ExecuteContractProposal>): _96.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _96.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UpdateAdminProposal;
                fromJSON(object: any): _96.UpdateAdminProposal;
                toJSON(message: _96.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_96.UpdateAdminProposal>): _96.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _96.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ClearAdminProposal;
                fromJSON(object: any): _96.ClearAdminProposal;
                toJSON(message: _96.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_96.ClearAdminProposal>): _96.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _96.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PinCodesProposal;
                fromJSON(object: any): _96.PinCodesProposal;
                toJSON(message: _96.PinCodesProposal): unknown;
                fromPartial(object: Partial<_96.PinCodesProposal>): _96.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _96.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.UnpinCodesProposal;
                fromJSON(object: any): _96.UnpinCodesProposal;
                toJSON(message: _96.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_96.UnpinCodesProposal>): _96.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _95.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCSend;
                fromJSON(object: any): _95.MsgIBCSend;
                toJSON(message: _95.MsgIBCSend): unknown;
                fromPartial(object: Partial<_95.MsgIBCSend>): _95.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _95.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MsgIBCCloseChannel;
                fromJSON(object: any): _95.MsgIBCCloseChannel;
                toJSON(message: _95.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_95.MsgIBCCloseChannel>): _95.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _94.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState;
                fromJSON(object: any): _94.GenesisState;
                toJSON(message: _94.GenesisState): unknown;
                fromPartial(object: Partial<_94.GenesisState>): _94.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _94.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.GenesisState_GenMsgs;
                fromJSON(object: any): _94.GenesisState_GenMsgs;
                toJSON(message: _94.GenesisState_GenMsgs): unknown;
                fromPartial(object: Partial<_94.GenesisState_GenMsgs>): _94.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _94.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Code;
                fromJSON(object: any): _94.Code;
                toJSON(message: _94.Code): unknown;
                fromPartial(object: Partial<_94.Code>): _94.Code;
            };
            Contract: {
                encode(message: _94.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Contract;
                fromJSON(object: any): _94.Contract;
                toJSON(message: _94.Contract): unknown;
                fromPartial(object: Partial<_94.Contract>): _94.Contract;
            };
            Sequence: {
                encode(message: _94.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Sequence;
                fromJSON(object: any): _94.Sequence;
                toJSON(message: _94.Sequence): unknown;
                fromPartial(object: Partial<_94.Sequence>): _94.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _210.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _209.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _208.LCDQueryClient;
                };
            };
        }>;
    };
}
