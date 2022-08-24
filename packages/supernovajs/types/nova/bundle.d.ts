import * as _135 from "./gal/v1/genesis";
import * as _136 from "./gal/v1/params";
import * as _137 from "./gal/v1/query";
import * as _138 from "./gal/v1/tx";
import * as _139 from "./ibcstaking/v1/genesis";
import * as _140 from "./ibcstaking/v1/params";
import * as _141 from "./ibcstaking/v1/query";
import * as _142 from "./ibcstaking/v1/tx";
import * as _143 from "./mint/v1/genesis";
import * as _144 from "./mint/v1/mint";
import * as _145 from "./mint/v1/query";
import * as _146 from "./oracle/v1/genesis";
import * as _147 from "./oracle/v1/params";
import * as _148 from "./oracle/v1/query";
import * as _149 from "./oracle/v1/tx";
import * as _224 from "./gal/v1/query.lcd";
import * as _225 from "./ibcstaking/v1/query.lcd";
import * as _226 from "./mint/v1/query.lcd";
import * as _227 from "./oracle/v1/query.lcd";
import * as _228 from "./gal/v1/query.rpc.query";
import * as _229 from "./ibcstaking/v1/query.rpc.query";
import * as _230 from "./mint/v1/query.rpc.query";
import * as _231 from "./oracle/v1/query.rpc.query";
import * as _232 from "./gal/v1/tx.rpc.msg";
import * as _233 from "./ibcstaking/v1/tx.rpc.msg";
import * as _234 from "./oracle/v1/tx.rpc.msg";
export declare namespace nova {
    namespace gal {
        const v1: {
            MsgClientImpl: typeof _232.MsgClientImpl;
            QueryClientImpl: typeof _228.QueryClientImpl;
            LCDQueryClient: typeof _224.LCDQueryClient;
            MsgDeposit: {
                encode(message: _138.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDeposit;
                fromJSON(object: any): _138.MsgDeposit;
                toJSON(message: _138.MsgDeposit): unknown;
                fromPartial(object: Partial<_138.MsgDeposit>): _138.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(message: _138.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDepositResponse;
                fromJSON(object: any): _138.MsgDepositResponse;
                toJSON(message: _138.MsgDepositResponse): unknown;
                fromPartial(object: Partial<_138.MsgDepositResponse>): _138.MsgDepositResponse;
            };
            MsgDelegate: {
                encode(message: _138.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDelegate;
                fromJSON(object: any): _138.MsgDelegate;
                toJSON(message: _138.MsgDelegate): unknown;
                fromPartial(object: Partial<_138.MsgDelegate>): _138.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _138.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgDelegateResponse;
                fromJSON(_: any): _138.MsgDelegateResponse;
                toJSON(_: _138.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_138.MsgDelegateResponse>): _138.MsgDelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _138.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUndelegate;
                fromJSON(object: any): _138.MsgUndelegate;
                toJSON(message: _138.MsgUndelegate): unknown;
                fromPartial(object: Partial<_138.MsgUndelegate>): _138.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _138.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUndelegateResponse;
                fromJSON(object: any): _138.MsgUndelegateResponse;
                toJSON(message: _138.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_138.MsgUndelegateResponse>): _138.MsgUndelegateResponse;
            };
            MsgPendingUndelegate: {
                encode(message: _138.MsgPendingUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgPendingUndelegate;
                fromJSON(object: any): _138.MsgPendingUndelegate;
                toJSON(message: _138.MsgPendingUndelegate): unknown;
                fromPartial(object: Partial<_138.MsgPendingUndelegate>): _138.MsgPendingUndelegate;
            };
            MsgPendingUndelegateResponse: {
                encode(message: _138.MsgPendingUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgPendingUndelegateResponse;
                fromJSON(object: any): _138.MsgPendingUndelegateResponse;
                toJSON(message: _138.MsgPendingUndelegateResponse): unknown;
                fromPartial(object: Partial<_138.MsgPendingUndelegateResponse>): _138.MsgPendingUndelegateResponse;
            };
            MsgWithdraw: {
                encode(message: _138.MsgWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgWithdraw;
                fromJSON(object: any): _138.MsgWithdraw;
                toJSON(message: _138.MsgWithdraw): unknown;
                fromPartial(object: Partial<_138.MsgWithdraw>): _138.MsgWithdraw;
            };
            MsgWithdrawResponse: {
                encode(message: _138.MsgWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgWithdrawResponse;
                fromJSON(object: any): _138.MsgWithdrawResponse;
                toJSON(message: _138.MsgWithdrawResponse): unknown;
                fromPartial(object: Partial<_138.MsgWithdrawResponse>): _138.MsgWithdrawResponse;
            };
            MsgClaimSnAsset: {
                encode(message: _138.MsgClaimSnAsset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgClaimSnAsset;
                fromJSON(object: any): _138.MsgClaimSnAsset;
                toJSON(message: _138.MsgClaimSnAsset): unknown;
                fromPartial(object: Partial<_138.MsgClaimSnAsset>): _138.MsgClaimSnAsset;
            };
            MsgClaimSnAssetResponse: {
                encode(message: _138.MsgClaimSnAssetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgClaimSnAssetResponse;
                fromJSON(object: any): _138.MsgClaimSnAssetResponse;
                toJSON(message: _138.MsgClaimSnAssetResponse): unknown;
                fromPartial(object: Partial<_138.MsgClaimSnAssetResponse>): _138.MsgClaimSnAssetResponse;
            };
            MsgPendingWithdraw: {
                encode(message: _138.MsgPendingWithdraw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgPendingWithdraw;
                fromJSON(object: any): _138.MsgPendingWithdraw;
                toJSON(message: _138.MsgPendingWithdraw): unknown;
                fromPartial(object: Partial<_138.MsgPendingWithdraw>): _138.MsgPendingWithdraw;
            };
            MsgPendingWithdrawResponse: {
                encode(_: _138.MsgPendingWithdrawResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgPendingWithdrawResponse;
                fromJSON(_: any): _138.MsgPendingWithdrawResponse;
                toJSON(_: _138.MsgPendingWithdrawResponse): unknown;
                fromPartial(_: Partial<_138.MsgPendingWithdrawResponse>): _138.MsgPendingWithdrawResponse;
            };
            QueryParamsRequest: {
                encode(_: _137.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsRequest;
                fromJSON(_: any): _137.QueryParamsRequest;
                toJSON(_: _137.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _137.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsResponse;
                fromJSON(object: any): _137.QueryParamsResponse;
                toJSON(message: _137.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
            };
            ClaimableAmountRequest: {
                encode(message: _137.ClaimableAmountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ClaimableAmountRequest;
                fromJSON(object: any): _137.ClaimableAmountRequest;
                toJSON(message: _137.ClaimableAmountRequest): unknown;
                fromPartial(object: Partial<_137.ClaimableAmountRequest>): _137.ClaimableAmountRequest;
            };
            ClaimableAmountResponse: {
                encode(message: _137.ClaimableAmountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ClaimableAmountResponse;
                fromJSON(object: any): _137.ClaimableAmountResponse;
                toJSON(message: _137.ClaimableAmountResponse): unknown;
                fromPartial(object: Partial<_137.ClaimableAmountResponse>): _137.ClaimableAmountResponse;
            };
            PendingWithdrawalsRequest: {
                encode(message: _137.PendingWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PendingWithdrawalsRequest;
                fromJSON(object: any): _137.PendingWithdrawalsRequest;
                toJSON(message: _137.PendingWithdrawalsRequest): unknown;
                fromPartial(object: Partial<_137.PendingWithdrawalsRequest>): _137.PendingWithdrawalsRequest;
            };
            PendingWithdrawalsResponse: {
                encode(message: _137.PendingWithdrawalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.PendingWithdrawalsResponse;
                fromJSON(object: any): _137.PendingWithdrawalsResponse;
                toJSON(message: _137.PendingWithdrawalsResponse): unknown;
                fromPartial(object: Partial<_137.PendingWithdrawalsResponse>): _137.PendingWithdrawalsResponse;
            };
            ActiveWithdrawalsRequest: {
                encode(message: _137.ActiveWithdrawalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ActiveWithdrawalsRequest;
                fromJSON(object: any): _137.ActiveWithdrawalsRequest;
                toJSON(message: _137.ActiveWithdrawalsRequest): unknown;
                fromPartial(object: Partial<_137.ActiveWithdrawalsRequest>): _137.ActiveWithdrawalsRequest;
            };
            ActiveWithdrawalsResponse: {
                encode(message: _137.ActiveWithdrawalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.ActiveWithdrawalsResponse;
                fromJSON(object: any): _137.ActiveWithdrawalsResponse;
                toJSON(message: _137.ActiveWithdrawalsResponse): unknown;
                fromPartial(object: Partial<_137.ActiveWithdrawalsResponse>): _137.ActiveWithdrawalsResponse;
            };
            QueryDepositRecordRequest: {
                encode(message: _137.QueryDepositRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryDepositRecordRequest;
                fromJSON(object: any): _137.QueryDepositRecordRequest;
                toJSON(message: _137.QueryDepositRecordRequest): unknown;
                fromPartial(object: Partial<_137.QueryDepositRecordRequest>): _137.QueryDepositRecordRequest;
            };
            QueryDepositRecordResponse: {
                encode(message: _137.QueryDepositRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryDepositRecordResponse;
                fromJSON(object: any): _137.QueryDepositRecordResponse;
                toJSON(message: _137.QueryDepositRecordResponse): unknown;
                fromPartial(object: Partial<_137.QueryDepositRecordResponse>): _137.QueryDepositRecordResponse;
            };
            QueryUndelegateRecordRequest: {
                encode(message: _137.QueryUndelegateRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUndelegateRecordRequest;
                fromJSON(object: any): _137.QueryUndelegateRecordRequest;
                toJSON(message: _137.QueryUndelegateRecordRequest): unknown;
                fromPartial(object: Partial<_137.QueryUndelegateRecordRequest>): _137.QueryUndelegateRecordRequest;
            };
            QueryUndelegateRecordResponse: {
                encode(message: _137.QueryUndelegateRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryUndelegateRecordResponse;
                fromJSON(object: any): _137.QueryUndelegateRecordResponse;
                toJSON(message: _137.QueryUndelegateRecordResponse): unknown;
                fromPartial(object: Partial<_137.QueryUndelegateRecordResponse>): _137.QueryUndelegateRecordResponse;
            };
            QueryWithdrawRecordRequest: {
                encode(message: _137.QueryWithdrawRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryWithdrawRecordRequest;
                fromJSON(object: any): _137.QueryWithdrawRecordRequest;
                toJSON(message: _137.QueryWithdrawRecordRequest): unknown;
                fromPartial(object: Partial<_137.QueryWithdrawRecordRequest>): _137.QueryWithdrawRecordRequest;
            };
            QueryWithdrawRecordResponse: {
                encode(message: _137.QueryWithdrawRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryWithdrawRecordResponse;
                fromJSON(object: any): _137.QueryWithdrawRecordResponse;
                toJSON(message: _137.QueryWithdrawRecordResponse): unknown;
                fromPartial(object: Partial<_137.QueryWithdrawRecordResponse>): _137.QueryWithdrawRecordResponse;
            };
            Params_WhiteListedTokenDenomsEntry: {
                encode(message: _136.Params_WhiteListedTokenDenomsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params_WhiteListedTokenDenomsEntry;
                fromJSON(object: any): _136.Params_WhiteListedTokenDenomsEntry;
                toJSON(message: _136.Params_WhiteListedTokenDenomsEntry): unknown;
                fromPartial(object: Partial<_136.Params_WhiteListedTokenDenomsEntry>): _136.Params_WhiteListedTokenDenomsEntry;
            };
            Params: {
                encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                fromJSON(object: any): _136.Params;
                toJSON(message: _136.Params): unknown;
                fromPartial(object: Partial<_136.Params>): _136.Params;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
                fromPartial(object: Partial<_135.GenesisState>): _135.GenesisState;
            };
            DepositAccount: {
                encode(message: _135.DepositAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DepositAccount;
                fromJSON(object: any): _135.DepositAccount;
                toJSON(message: _135.DepositAccount): unknown;
                fromPartial(object: Partial<_135.DepositAccount>): _135.DepositAccount;
            };
            DepositInfo: {
                encode(message: _135.DepositInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DepositInfo;
                fromJSON(object: any): _135.DepositInfo;
                toJSON(message: _135.DepositInfo): unknown;
                fromPartial(object: Partial<_135.DepositInfo>): _135.DepositInfo;
            };
            WithdrawInfo: {
                encode(message: _135.WithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.WithdrawInfo;
                fromJSON(object: any): _135.WithdrawInfo;
                toJSON(message: _135.WithdrawInfo): unknown;
                fromPartial(object: Partial<_135.WithdrawInfo>): _135.WithdrawInfo;
            };
            RecordInfo: {
                encode(message: _135.RecordInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.RecordInfo;
                fromJSON(object: any): _135.RecordInfo;
                toJSON(message: _135.RecordInfo): unknown;
                fromPartial(object: Partial<_135.RecordInfo>): _135.RecordInfo;
            };
            DepositRecord: {
                encode(message: _135.DepositRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DepositRecord;
                fromJSON(object: any): _135.DepositRecord;
                toJSON(message: _135.DepositRecord): unknown;
                fromPartial(object: Partial<_135.DepositRecord>): _135.DepositRecord;
            };
            DepositRecordContent: {
                encode(message: _135.DepositRecordContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.DepositRecordContent;
                fromJSON(object: any): _135.DepositRecordContent;
                toJSON(message: _135.DepositRecordContent): unknown;
                fromPartial(object: Partial<_135.DepositRecordContent>): _135.DepositRecordContent;
            };
            UndelegateRecord: {
                encode(message: _135.UndelegateRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UndelegateRecord;
                fromJSON(object: any): _135.UndelegateRecord;
                toJSON(message: _135.UndelegateRecord): unknown;
                fromPartial(object: Partial<_135.UndelegateRecord>): _135.UndelegateRecord;
            };
            UndelegateRecordContent: {
                encode(message: _135.UndelegateRecordContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.UndelegateRecordContent;
                fromJSON(object: any): _135.UndelegateRecordContent;
                toJSON(message: _135.UndelegateRecordContent): unknown;
                fromPartial(object: Partial<_135.UndelegateRecordContent>): _135.UndelegateRecordContent;
            };
            WithdrawRecord_RecordsEntry: {
                encode(message: _135.WithdrawRecord_RecordsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.WithdrawRecord_RecordsEntry;
                fromJSON(object: any): _135.WithdrawRecord_RecordsEntry;
                toJSON(message: _135.WithdrawRecord_RecordsEntry): unknown;
                fromPartial(object: Partial<_135.WithdrawRecord_RecordsEntry>): _135.WithdrawRecord_RecordsEntry;
            };
            WithdrawRecord: {
                encode(message: _135.WithdrawRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.WithdrawRecord;
                fromJSON(object: any): _135.WithdrawRecord;
                toJSON(message: _135.WithdrawRecord): unknown;
                fromPartial(object: Partial<_135.WithdrawRecord>): _135.WithdrawRecord;
            };
            WithdrawRecordContent: {
                encode(message: _135.WithdrawRecordContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.WithdrawRecordContent;
                fromJSON(object: any): _135.WithdrawRecordContent;
                toJSON(message: _135.WithdrawRecordContent): unknown;
                fromPartial(object: Partial<_135.WithdrawRecordContent>): _135.WithdrawRecordContent;
            };
        };
    }
    namespace ibcstaking {
        const v1: {
            MsgClientImpl: typeof _233.MsgClientImpl;
            QueryClientImpl: typeof _229.QueryClientImpl;
            LCDQueryClient: typeof _225.LCDQueryClient;
            MsgRegisterZone: {
                encode(message: _142.MsgRegisterZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgRegisterZone;
                fromJSON(object: any): _142.MsgRegisterZone;
                toJSON(message: _142.MsgRegisterZone): unknown;
                fromPartial(object: Partial<_142.MsgRegisterZone>): _142.MsgRegisterZone;
            };
            MsgRegisterZoneResponse: {
                encode(_: _142.MsgRegisterZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgRegisterZoneResponse;
                fromJSON(_: any): _142.MsgRegisterZoneResponse;
                toJSON(_: _142.MsgRegisterZoneResponse): unknown;
                fromPartial(_: Partial<_142.MsgRegisterZoneResponse>): _142.MsgRegisterZoneResponse;
            };
            MsgChangeRegisteredZoneInfo: {
                encode(message: _142.MsgChangeRegisteredZoneInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgChangeRegisteredZoneInfo;
                fromJSON(object: any): _142.MsgChangeRegisteredZoneInfo;
                toJSON(message: _142.MsgChangeRegisteredZoneInfo): unknown;
                fromPartial(object: Partial<_142.MsgChangeRegisteredZoneInfo>): _142.MsgChangeRegisteredZoneInfo;
            };
            MsgChangeRegisteredZoneInfoResponse: {
                encode(_: _142.MsgChangeRegisteredZoneInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgChangeRegisteredZoneInfoResponse;
                fromJSON(_: any): _142.MsgChangeRegisteredZoneInfoResponse;
                toJSON(_: _142.MsgChangeRegisteredZoneInfoResponse): unknown;
                fromPartial(_: Partial<_142.MsgChangeRegisteredZoneInfoResponse>): _142.MsgChangeRegisteredZoneInfoResponse;
            };
            MsgDeleteRegisteredZone: {
                encode(message: _142.MsgDeleteRegisteredZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDeleteRegisteredZone;
                fromJSON(object: any): _142.MsgDeleteRegisteredZone;
                toJSON(message: _142.MsgDeleteRegisteredZone): unknown;
                fromPartial(object: Partial<_142.MsgDeleteRegisteredZone>): _142.MsgDeleteRegisteredZone;
            };
            MsgDeleteRegisteredZoneResponse: {
                encode(_: _142.MsgDeleteRegisteredZoneResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDeleteRegisteredZoneResponse;
                fromJSON(_: any): _142.MsgDeleteRegisteredZoneResponse;
                toJSON(_: _142.MsgDeleteRegisteredZoneResponse): unknown;
                fromPartial(_: Partial<_142.MsgDeleteRegisteredZoneResponse>): _142.MsgDeleteRegisteredZoneResponse;
            };
            MsgIcaDelegate: {
                encode(message: _142.MsgIcaDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaDelegate;
                fromJSON(object: any): _142.MsgIcaDelegate;
                toJSON(message: _142.MsgIcaDelegate): unknown;
                fromPartial(object: Partial<_142.MsgIcaDelegate>): _142.MsgIcaDelegate;
            };
            MsgIcaDelegateResponse: {
                encode(_: _142.MsgIcaDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaDelegateResponse;
                fromJSON(_: any): _142.MsgIcaDelegateResponse;
                toJSON(_: _142.MsgIcaDelegateResponse): unknown;
                fromPartial(_: Partial<_142.MsgIcaDelegateResponse>): _142.MsgIcaDelegateResponse;
            };
            MsgIcaUndelegate: {
                encode(message: _142.MsgIcaUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaUndelegate;
                fromJSON(object: any): _142.MsgIcaUndelegate;
                toJSON(message: _142.MsgIcaUndelegate): unknown;
                fromPartial(object: Partial<_142.MsgIcaUndelegate>): _142.MsgIcaUndelegate;
            };
            MsgIcaUndelegateResponse: {
                encode(_: _142.MsgIcaUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaUndelegateResponse;
                fromJSON(_: any): _142.MsgIcaUndelegateResponse;
                toJSON(_: _142.MsgIcaUndelegateResponse): unknown;
                fromPartial(_: Partial<_142.MsgIcaUndelegateResponse>): _142.MsgIcaUndelegateResponse;
            };
            MsgIcaAutoStaking: {
                encode(message: _142.MsgIcaAutoStaking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaAutoStaking;
                fromJSON(object: any): _142.MsgIcaAutoStaking;
                toJSON(message: _142.MsgIcaAutoStaking): unknown;
                fromPartial(object: Partial<_142.MsgIcaAutoStaking>): _142.MsgIcaAutoStaking;
            };
            MsgIcaAutoStakingResponse: {
                encode(_: _142.MsgIcaAutoStakingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaAutoStakingResponse;
                fromJSON(_: any): _142.MsgIcaAutoStakingResponse;
                toJSON(_: _142.MsgIcaAutoStakingResponse): unknown;
                fromPartial(_: Partial<_142.MsgIcaAutoStakingResponse>): _142.MsgIcaAutoStakingResponse;
            };
            MsgIcaTransfer: {
                encode(message: _142.MsgIcaTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaTransfer;
                fromJSON(object: any): _142.MsgIcaTransfer;
                toJSON(message: _142.MsgIcaTransfer): unknown;
                fromPartial(object: Partial<_142.MsgIcaTransfer>): _142.MsgIcaTransfer;
            };
            MsgIcaTransferResponse: {
                encode(_: _142.MsgIcaTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgIcaTransferResponse;
                fromJSON(_: any): _142.MsgIcaTransferResponse;
                toJSON(_: _142.MsgIcaTransferResponse): unknown;
                fromPartial(_: Partial<_142.MsgIcaTransferResponse>): _142.MsgIcaTransferResponse;
            };
            MsgRegisterHostAccount: {
                encode(message: _142.MsgRegisterHostAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgRegisterHostAccount;
                fromJSON(object: any): _142.MsgRegisterHostAccount;
                toJSON(message: _142.MsgRegisterHostAccount): unknown;
                fromPartial(object: Partial<_142.MsgRegisterHostAccount>): _142.MsgRegisterHostAccount;
            };
            MsgRegisterHostAccountResponse: {
                encode(_: _142.MsgRegisterHostAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgRegisterHostAccountResponse;
                fromJSON(_: any): _142.MsgRegisterHostAccountResponse;
                toJSON(_: _142.MsgRegisterHostAccountResponse): unknown;
                fromPartial(_: Partial<_142.MsgRegisterHostAccountResponse>): _142.MsgRegisterHostAccountResponse;
            };
            QueryAllZonesRequest: {
                encode(_: _141.QueryAllZonesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllZonesRequest;
                fromJSON(_: any): _141.QueryAllZonesRequest;
                toJSON(_: _141.QueryAllZonesRequest): unknown;
                fromPartial(_: Partial<_141.QueryAllZonesRequest>): _141.QueryAllZonesRequest;
            };
            QueryAllZonesResponse: {
                encode(message: _141.QueryAllZonesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.QueryAllZonesResponse;
                fromJSON(object: any): _141.QueryAllZonesResponse;
                toJSON(message: _141.QueryAllZonesResponse): unknown;
                fromPartial(object: Partial<_141.QueryAllZonesResponse>): _141.QueryAllZonesResponse;
            };
            Params: {
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
            };
            CommissionInfo: {
                encode(message: _140.CommissionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CommissionInfo;
                fromJSON(object: any): _140.CommissionInfo;
                toJSON(message: _140.CommissionInfo): unknown;
                fromPartial(object: Partial<_140.CommissionInfo>): _140.CommissionInfo;
            };
            GenesisState: {
                encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.GenesisState;
                fromJSON(object: any): _139.GenesisState;
                toJSON(message: _139.GenesisState): unknown;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
            };
            RegisteredZone: {
                encode(message: _139.RegisteredZone, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.RegisteredZone;
                fromJSON(object: any): _139.RegisteredZone;
                toJSON(message: _139.RegisteredZone): unknown;
                fromPartial(object: Partial<_139.RegisteredZone>): _139.RegisteredZone;
            };
            IcaAccount: {
                encode(message: _139.IcaAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.IcaAccount;
                fromJSON(object: any): _139.IcaAccount;
                toJSON(message: _139.IcaAccount): unknown;
                fromPartial(object: Partial<_139.IcaAccount>): _139.IcaAccount;
            };
            IcaConnectionInfo: {
                encode(message: _139.IcaConnectionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.IcaConnectionInfo;
                fromJSON(object: any): _139.IcaConnectionInfo;
                toJSON(message: _139.IcaConnectionInfo): unknown;
                fromPartial(object: Partial<_139.IcaConnectionInfo>): _139.IcaConnectionInfo;
            };
        };
    }
    namespace mint {
        const v1: {
            QueryClientImpl: typeof _230.QueryClientImpl;
            LCDQueryClient: typeof _226.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _145.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsRequest;
                fromJSON(_: any): _145.QueryParamsRequest;
                toJSON(_: _145.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsResponse;
                fromJSON(object: any): _145.QueryParamsResponse;
                toJSON(message: _145.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _145.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryInflationRequest;
                fromJSON(_: any): _145.QueryInflationRequest;
                toJSON(_: _145.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_145.QueryInflationRequest>): _145.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _145.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryInflationResponse;
                fromJSON(object: any): _145.QueryInflationResponse;
                toJSON(message: _145.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_145.QueryInflationResponse>): _145.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _145.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _145.QueryAnnualProvisionsRequest;
                toJSON(_: _145.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_145.QueryAnnualProvisionsRequest>): _145.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _145.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _145.QueryAnnualProvisionsResponse;
                toJSON(message: _145.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_145.QueryAnnualProvisionsResponse>): _145.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _144.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Minter;
                fromJSON(object: any): _144.Minter;
                toJSON(message: _144.Minter): unknown;
                fromPartial(object: Partial<_144.Minter>): _144.Minter;
            };
            DistributionProportions: {
                encode(message: _144.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DistributionProportions;
                fromJSON(object: any): _144.DistributionProportions;
                toJSON(message: _144.DistributionProportions): unknown;
                fromPartial(object: Partial<_144.DistributionProportions>): _144.DistributionProportions;
            };
            Params: {
                encode(message: _144.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Params;
                fromJSON(object: any): _144.Params;
                toJSON(message: _144.Params): unknown;
                fromPartial(object: Partial<_144.Params>): _144.Params;
            };
            GenesisState: {
                encode(message: _143.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.GenesisState;
                fromJSON(object: any): _143.GenesisState;
                toJSON(message: _143.GenesisState): unknown;
                fromPartial(object: Partial<_143.GenesisState>): _143.GenesisState;
            };
        };
    }
    namespace oracle {
        const v1: {
            MsgClientImpl: typeof _234.MsgClientImpl;
            QueryClientImpl: typeof _231.QueryClientImpl;
            LCDQueryClient: typeof _227.LCDQueryClient;
            MsgUpdateChainState: {
                encode(message: _149.MsgUpdateChainState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateChainState;
                fromJSON(object: any): _149.MsgUpdateChainState;
                toJSON(message: _149.MsgUpdateChainState): unknown;
                fromPartial(object: Partial<_149.MsgUpdateChainState>): _149.MsgUpdateChainState;
            };
            MsgUpdateChainStateResponse: {
                encode(message: _149.MsgUpdateChainStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgUpdateChainStateResponse;
                fromJSON(object: any): _149.MsgUpdateChainStateResponse;
                toJSON(message: _149.MsgUpdateChainStateResponse): unknown;
                fromPartial(object: Partial<_149.MsgUpdateChainStateResponse>): _149.MsgUpdateChainStateResponse;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromJSON(_: any): _148.QueryParamsRequest;
                toJSON(_: _148.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_148.QueryParamsRequest>): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromJSON(object: any): _148.QueryParamsResponse;
                toJSON(message: _148.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_148.QueryParamsResponse>): _148.QueryParamsResponse;
            };
            QueryStateRequest: {
                encode(message: _148.QueryStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryStateRequest;
                fromJSON(object: any): _148.QueryStateRequest;
                toJSON(message: _148.QueryStateRequest): unknown;
                fromPartial(object: Partial<_148.QueryStateRequest>): _148.QueryStateRequest;
            };
            QueryStateResponse: {
                encode(message: _148.QueryStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryStateResponse;
                fromJSON(object: any): _148.QueryStateResponse;
                toJSON(message: _148.QueryStateResponse): unknown;
                fromPartial(object: Partial<_148.QueryStateResponse>): _148.QueryStateResponse;
            };
            Params: {
                encode(message: _147.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Params;
                fromJSON(object: any): _147.Params;
                toJSON(message: _147.Params): unknown;
                fromPartial(object: Partial<_147.Params>): _147.Params;
            };
            GenesisState: {
                encode(message: _146.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.GenesisState;
                fromJSON(object: any): _146.GenesisState;
                toJSON(message: _146.GenesisState): unknown;
                fromPartial(object: Partial<_146.GenesisState>): _146.GenesisState;
            };
            ChainInfo: {
                encode(message: _146.ChainInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ChainInfo;
                fromJSON(object: any): _146.ChainInfo;
                toJSON(message: _146.ChainInfo): unknown;
                fromPartial(object: Partial<_146.ChainInfo>): _146.ChainInfo;
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
            nova: {
                gal: {
                    v1: _232.MsgClientImpl;
                };
                ibcstaking: {
                    v1: _233.MsgClientImpl;
                };
                oracle: {
                    v1: _234.MsgClientImpl;
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
            nova: {
                gal: {
                    v1: _228.QueryClientImpl;
                };
                ibcstaking: {
                    v1: _229.QueryClientImpl;
                };
                mint: {
                    v1: _230.QueryClientImpl;
                };
                oracle: {
                    v1: _231.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: any;
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
            nova: {
                gal: {
                    v1: _224.LCDQueryClient;
                };
                ibcstaking: {
                    v1: _225.LCDQueryClient;
                };
                mint: {
                    v1: _226.LCDQueryClient;
                };
                oracle: {
                    v1: _227.LCDQueryClient;
                };
            };
        }>;
    };
}
