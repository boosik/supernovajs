import * as _111 from "./applications/transfer/v1/genesis";
import * as _112 from "./applications/transfer/v1/query";
import * as _113 from "./applications/transfer/v1/transfer";
import * as _114 from "./applications/transfer/v1/tx";
import * as _115 from "./applications/transfer/v2/packet";
import * as _116 from "./core/channel/v1/channel";
import * as _117 from "./core/channel/v1/genesis";
import * as _118 from "./core/channel/v1/query";
import * as _119 from "./core/channel/v1/tx";
import * as _120 from "./core/client/v1/client";
import * as _121 from "./core/client/v1/genesis";
import * as _122 from "./core/client/v1/query";
import * as _123 from "./core/client/v1/tx";
import * as _124 from "./core/commitment/v1/commitment";
import * as _125 from "./core/connection/v1/connection";
import * as _126 from "./core/connection/v1/genesis";
import * as _127 from "./core/connection/v1/query";
import * as _128 from "./core/connection/v1/tx";
import * as _129 from "./core/port/v1/query";
import * as _130 from "./core/types/v1/genesis";
import * as _131 from "./lightclients/localhost/v1/localhost";
import * as _132 from "./lightclients/solomachine/v1/solomachine";
import * as _133 from "./lightclients/solomachine/v2/solomachine";
import * as _134 from "./lightclients/tendermint/v1/tendermint";
import * as _211 from "./applications/transfer/v1/query.lcd";
import * as _212 from "./core/channel/v1/query.lcd";
import * as _213 from "./core/client/v1/query.lcd";
import * as _214 from "./core/connection/v1/query.lcd";
import * as _215 from "./applications/transfer/v1/query.rpc.query";
import * as _216 from "./core/channel/v1/query.rpc.query";
import * as _217 from "./core/client/v1/query.rpc.query";
import * as _218 from "./core/connection/v1/query.rpc.query";
import * as _219 from "./core/port/v1/query.rpc.query";
import * as _220 from "./applications/transfer/v1/tx.rpc.msg";
import * as _221 from "./core/channel/v1/tx.rpc.msg";
import * as _222 from "./core/client/v1/tx.rpc.msg";
import * as _223 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _220.MsgClientImpl;
                QueryClientImpl: typeof _215.QueryClientImpl;
                LCDQueryClient: typeof _211.LCDQueryClient;
                MsgTransfer: {
                    encode(message: _114.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTransfer;
                    fromJSON(object: any): _114.MsgTransfer;
                    toJSON(message: _114.MsgTransfer): unknown;
                    fromPartial(object: Partial<_114.MsgTransfer>): _114.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _114.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgTransferResponse;
                    fromJSON(_: any): _114.MsgTransferResponse;
                    toJSON(_: _114.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_114.MsgTransferResponse>): _114.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _113.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DenomTrace;
                    fromJSON(object: any): _113.DenomTrace;
                    toJSON(message: _113.DenomTrace): unknown;
                    fromPartial(object: Partial<_113.DenomTrace>): _113.DenomTrace;
                };
                Params: {
                    encode(message: _113.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Params;
                    fromJSON(object: any): _113.Params;
                    toJSON(message: _113.Params): unknown;
                    fromPartial(object: Partial<_113.Params>): _113.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _112.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTraceRequest;
                    fromJSON(object: any): _112.QueryDenomTraceRequest;
                    toJSON(message: _112.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_112.QueryDenomTraceRequest>): _112.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _112.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTraceResponse;
                    fromJSON(object: any): _112.QueryDenomTraceResponse;
                    toJSON(message: _112.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_112.QueryDenomTraceResponse>): _112.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _112.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTracesRequest;
                    fromJSON(object: any): _112.QueryDenomTracesRequest;
                    toJSON(message: _112.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_112.QueryDenomTracesRequest>): _112.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _112.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryDenomTracesResponse;
                    fromJSON(object: any): _112.QueryDenomTracesResponse;
                    toJSON(message: _112.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_112.QueryDenomTracesResponse>): _112.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _112.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsRequest;
                    fromJSON(_: any): _112.QueryParamsRequest;
                    toJSON(_: _112.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _112.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsResponse;
                    fromJSON(object: any): _112.QueryParamsResponse;
                    toJSON(message: _112.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                    fromJSON(object: any): _111.GenesisState;
                    toJSON(message: _111.GenesisState): unknown;
                    fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _115.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.FungibleTokenPacketData;
                    fromJSON(object: any): _115.FungibleTokenPacketData;
                    toJSON(message: _115.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_115.FungibleTokenPacketData>): _115.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _221.MsgClientImpl;
                QueryClientImpl: typeof _216.QueryClientImpl;
                LCDQueryClient: typeof _212.LCDQueryClient;
                MsgChannelOpenInit: {
                    encode(message: _119.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenInit;
                    fromJSON(object: any): _119.MsgChannelOpenInit;
                    toJSON(message: _119.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_119.MsgChannelOpenInit>): _119.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _119.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _119.MsgChannelOpenInitResponse;
                    toJSON(_: _119.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelOpenInitResponse>): _119.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _119.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenTry;
                    fromJSON(object: any): _119.MsgChannelOpenTry;
                    toJSON(message: _119.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_119.MsgChannelOpenTry>): _119.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _119.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _119.MsgChannelOpenTryResponse;
                    toJSON(_: _119.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelOpenTryResponse>): _119.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _119.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenAck;
                    fromJSON(object: any): _119.MsgChannelOpenAck;
                    toJSON(message: _119.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_119.MsgChannelOpenAck>): _119.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _119.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _119.MsgChannelOpenAckResponse;
                    toJSON(_: _119.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelOpenAckResponse>): _119.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _119.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenConfirm;
                    fromJSON(object: any): _119.MsgChannelOpenConfirm;
                    toJSON(message: _119.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_119.MsgChannelOpenConfirm>): _119.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _119.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgChannelOpenConfirmResponse;
                    toJSON(_: _119.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelOpenConfirmResponse>): _119.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _119.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseInit;
                    fromJSON(object: any): _119.MsgChannelCloseInit;
                    toJSON(message: _119.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_119.MsgChannelCloseInit>): _119.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _119.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _119.MsgChannelCloseInitResponse;
                    toJSON(_: _119.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelCloseInitResponse>): _119.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _119.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseConfirm;
                    fromJSON(object: any): _119.MsgChannelCloseConfirm;
                    toJSON(message: _119.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_119.MsgChannelCloseConfirm>): _119.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _119.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _119.MsgChannelCloseConfirmResponse;
                    toJSON(_: _119.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_119.MsgChannelCloseConfirmResponse>): _119.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _119.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgRecvPacket;
                    fromJSON(object: any): _119.MsgRecvPacket;
                    toJSON(message: _119.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_119.MsgRecvPacket>): _119.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _119.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgRecvPacketResponse;
                    fromJSON(_: any): _119.MsgRecvPacketResponse;
                    toJSON(_: _119.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_119.MsgRecvPacketResponse>): _119.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _119.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeout;
                    fromJSON(object: any): _119.MsgTimeout;
                    toJSON(message: _119.MsgTimeout): unknown;
                    fromPartial(object: Partial<_119.MsgTimeout>): _119.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _119.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutResponse;
                    fromJSON(_: any): _119.MsgTimeoutResponse;
                    toJSON(_: _119.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_119.MsgTimeoutResponse>): _119.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _119.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutOnClose;
                    fromJSON(object: any): _119.MsgTimeoutOnClose;
                    toJSON(message: _119.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_119.MsgTimeoutOnClose>): _119.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _119.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _119.MsgTimeoutOnCloseResponse;
                    toJSON(_: _119.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_119.MsgTimeoutOnCloseResponse>): _119.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _119.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgAcknowledgement;
                    fromJSON(object: any): _119.MsgAcknowledgement;
                    toJSON(message: _119.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_119.MsgAcknowledgement>): _119.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _119.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgAcknowledgementResponse;
                    fromJSON(_: any): _119.MsgAcknowledgementResponse;
                    toJSON(_: _119.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_119.MsgAcknowledgementResponse>): _119.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _118.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelRequest;
                    fromJSON(object: any): _118.QueryChannelRequest;
                    toJSON(message: _118.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_118.QueryChannelRequest>): _118.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _118.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelResponse;
                    fromJSON(object: any): _118.QueryChannelResponse;
                    toJSON(message: _118.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_118.QueryChannelResponse>): _118.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _118.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelsRequest;
                    fromJSON(object: any): _118.QueryChannelsRequest;
                    toJSON(message: _118.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryChannelsRequest>): _118.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _118.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelsResponse;
                    fromJSON(object: any): _118.QueryChannelsResponse;
                    toJSON(message: _118.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryChannelsResponse>): _118.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _118.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _118.QueryConnectionChannelsRequest;
                    toJSON(message: _118.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionChannelsRequest>): _118.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _118.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _118.QueryConnectionChannelsResponse;
                    toJSON(message: _118.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryConnectionChannelsResponse>): _118.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _118.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelClientStateRequest;
                    fromJSON(object: any): _118.QueryChannelClientStateRequest;
                    toJSON(message: _118.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_118.QueryChannelClientStateRequest>): _118.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _118.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelClientStateResponse;
                    fromJSON(object: any): _118.QueryChannelClientStateResponse;
                    toJSON(message: _118.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_118.QueryChannelClientStateResponse>): _118.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _118.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _118.QueryChannelConsensusStateRequest;
                    toJSON(message: _118.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_118.QueryChannelConsensusStateRequest>): _118.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _118.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _118.QueryChannelConsensusStateResponse;
                    toJSON(message: _118.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_118.QueryChannelConsensusStateResponse>): _118.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _118.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _118.QueryPacketCommitmentRequest;
                    toJSON(message: _118.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentRequest>): _118.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _118.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _118.QueryPacketCommitmentResponse;
                    toJSON(message: _118.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentResponse>): _118.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _118.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _118.QueryPacketCommitmentsRequest;
                    toJSON(message: _118.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentsRequest>): _118.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _118.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _118.QueryPacketCommitmentsResponse;
                    toJSON(message: _118.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryPacketCommitmentsResponse>): _118.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _118.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketReceiptRequest;
                    fromJSON(object: any): _118.QueryPacketReceiptRequest;
                    toJSON(message: _118.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_118.QueryPacketReceiptRequest>): _118.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _118.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketReceiptResponse;
                    fromJSON(object: any): _118.QueryPacketReceiptResponse;
                    toJSON(message: _118.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_118.QueryPacketReceiptResponse>): _118.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _118.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementRequest;
                    toJSON(message: _118.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementRequest>): _118.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _118.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementResponse;
                    toJSON(message: _118.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementResponse>): _118.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _118.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _118.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementsRequest>): _118.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _118.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _118.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _118.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryPacketAcknowledgementsResponse>): _118.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _118.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsRequest;
                    toJSON(message: _118.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_118.QueryUnreceivedPacketsRequest>): _118.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _118.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _118.QueryUnreceivedPacketsResponse;
                    toJSON(message: _118.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_118.QueryUnreceivedPacketsResponse>): _118.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _118.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _118.QueryUnreceivedAcksRequest;
                    toJSON(message: _118.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_118.QueryUnreceivedAcksRequest>): _118.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _118.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _118.QueryUnreceivedAcksResponse;
                    toJSON(message: _118.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_118.QueryUnreceivedAcksResponse>): _118.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _118.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveRequest;
                    toJSON(message: _118.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_118.QueryNextSequenceReceiveRequest>): _118.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _118.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _118.QueryNextSequenceReceiveResponse;
                    toJSON(message: _118.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_118.QueryNextSequenceReceiveResponse>): _118.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                };
                PacketSequence: {
                    encode(message: _117.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.PacketSequence;
                    fromJSON(object: any): _117.PacketSequence;
                    toJSON(message: _117.PacketSequence): unknown;
                    fromPartial(object: Partial<_117.PacketSequence>): _117.PacketSequence;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                orderFromJSON(object: any): _116.Order;
                orderToJSON(object: _116.Order): string;
                State: typeof _116.State;
                Order: typeof _116.Order;
                Channel: {
                    encode(message: _116.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Channel;
                    fromJSON(object: any): _116.Channel;
                    toJSON(message: _116.Channel): unknown;
                    fromPartial(object: Partial<_116.Channel>): _116.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _116.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedChannel;
                    fromJSON(object: any): _116.IdentifiedChannel;
                    toJSON(message: _116.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_116.IdentifiedChannel>): _116.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial(object: Partial<_116.Counterparty>): _116.Counterparty;
                };
                Packet: {
                    encode(message: _116.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Packet;
                    fromJSON(object: any): _116.Packet;
                    toJSON(message: _116.Packet): unknown;
                    fromPartial(object: Partial<_116.Packet>): _116.Packet;
                };
                PacketState: {
                    encode(message: _116.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.PacketState;
                    fromJSON(object: any): _116.PacketState;
                    toJSON(message: _116.PacketState): unknown;
                    fromPartial(object: Partial<_116.PacketState>): _116.PacketState;
                };
                Acknowledgement: {
                    encode(message: _116.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Acknowledgement;
                    fromJSON(object: any): _116.Acknowledgement;
                    toJSON(message: _116.Acknowledgement): unknown;
                    fromPartial(object: Partial<_116.Acknowledgement>): _116.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _222.MsgClientImpl;
                QueryClientImpl: typeof _217.QueryClientImpl;
                LCDQueryClient: typeof _213.LCDQueryClient;
                MsgCreateClient: {
                    encode(message: _123.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateClient;
                    fromJSON(object: any): _123.MsgCreateClient;
                    toJSON(message: _123.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_123.MsgCreateClient>): _123.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _123.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgCreateClientResponse;
                    fromJSON(_: any): _123.MsgCreateClientResponse;
                    toJSON(_: _123.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_123.MsgCreateClientResponse>): _123.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _123.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateClient;
                    fromJSON(object: any): _123.MsgUpdateClient;
                    toJSON(message: _123.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_123.MsgUpdateClient>): _123.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _123.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateClientResponse;
                    fromJSON(_: any): _123.MsgUpdateClientResponse;
                    toJSON(_: _123.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_123.MsgUpdateClientResponse>): _123.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _123.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpgradeClient;
                    fromJSON(object: any): _123.MsgUpgradeClient;
                    toJSON(message: _123.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_123.MsgUpgradeClient>): _123.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _123.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpgradeClientResponse;
                    fromJSON(_: any): _123.MsgUpgradeClientResponse;
                    toJSON(_: _123.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_123.MsgUpgradeClientResponse>): _123.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _123.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _123.MsgSubmitMisbehaviour;
                    toJSON(message: _123.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_123.MsgSubmitMisbehaviour>): _123.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _123.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _123.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _123.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_123.MsgSubmitMisbehaviourResponse>): _123.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _122.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStateRequest;
                    fromJSON(object: any): _122.QueryClientStateRequest;
                    toJSON(message: _122.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_122.QueryClientStateRequest>): _122.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _122.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStateResponse;
                    fromJSON(object: any): _122.QueryClientStateResponse;
                    toJSON(message: _122.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_122.QueryClientStateResponse>): _122.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _122.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStatesRequest;
                    fromJSON(object: any): _122.QueryClientStatesRequest;
                    toJSON(message: _122.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_122.QueryClientStatesRequest>): _122.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _122.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStatesResponse;
                    fromJSON(object: any): _122.QueryClientStatesResponse;
                    toJSON(message: _122.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_122.QueryClientStatesResponse>): _122.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _122.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConsensusStateRequest;
                    fromJSON(object: any): _122.QueryConsensusStateRequest;
                    toJSON(message: _122.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_122.QueryConsensusStateRequest>): _122.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _122.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConsensusStateResponse;
                    fromJSON(object: any): _122.QueryConsensusStateResponse;
                    toJSON(message: _122.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_122.QueryConsensusStateResponse>): _122.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _122.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConsensusStatesRequest;
                    fromJSON(object: any): _122.QueryConsensusStatesRequest;
                    toJSON(message: _122.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_122.QueryConsensusStatesRequest>): _122.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _122.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryConsensusStatesResponse;
                    fromJSON(object: any): _122.QueryConsensusStatesResponse;
                    toJSON(message: _122.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_122.QueryConsensusStatesResponse>): _122.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _122.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStatusRequest;
                    fromJSON(object: any): _122.QueryClientStatusRequest;
                    toJSON(message: _122.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_122.QueryClientStatusRequest>): _122.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _122.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientStatusResponse;
                    fromJSON(object: any): _122.QueryClientStatusResponse;
                    toJSON(message: _122.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_122.QueryClientStatusResponse>): _122.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _122.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientParamsRequest;
                    fromJSON(_: any): _122.QueryClientParamsRequest;
                    toJSON(_: _122.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_122.QueryClientParamsRequest>): _122.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _122.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryClientParamsResponse;
                    fromJSON(object: any): _122.QueryClientParamsResponse;
                    toJSON(message: _122.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_122.QueryClientParamsResponse>): _122.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _122.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _122.QueryUpgradedClientStateRequest;
                    toJSON(_: _122.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_122.QueryUpgradedClientStateRequest>): _122.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _122.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _122.QueryUpgradedClientStateResponse;
                    toJSON(message: _122.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_122.QueryUpgradedClientStateResponse>): _122.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _122.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _122.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _122.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_122.QueryUpgradedConsensusStateRequest>): _122.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _122.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _122.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _122.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_122.QueryUpgradedConsensusStateResponse>): _122.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromJSON(object: any): _121.GenesisState;
                    toJSON(message: _121.GenesisState): unknown;
                    fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _121.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisMetadata;
                    fromJSON(object: any): _121.GenesisMetadata;
                    toJSON(message: _121.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_121.GenesisMetadata>): _121.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _121.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _121.IdentifiedGenesisMetadata;
                    toJSON(message: _121.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_121.IdentifiedGenesisMetadata>): _121.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _120.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.IdentifiedClientState;
                    fromJSON(object: any): _120.IdentifiedClientState;
                    toJSON(message: _120.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_120.IdentifiedClientState>): _120.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _120.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ConsensusStateWithHeight;
                    fromJSON(object: any): _120.ConsensusStateWithHeight;
                    toJSON(message: _120.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_120.ConsensusStateWithHeight>): _120.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _120.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientConsensusStates;
                    fromJSON(object: any): _120.ClientConsensusStates;
                    toJSON(message: _120.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_120.ClientConsensusStates>): _120.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _120.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ClientUpdateProposal;
                    fromJSON(object: any): _120.ClientUpdateProposal;
                    toJSON(message: _120.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_120.ClientUpdateProposal>): _120.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _120.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.UpgradeProposal;
                    fromJSON(object: any): _120.UpgradeProposal;
                    toJSON(message: _120.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_120.UpgradeProposal>): _120.UpgradeProposal;
                };
                Height: {
                    encode(message: _120.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Height;
                    fromJSON(object: any): _120.Height;
                    toJSON(message: _120.Height): unknown;
                    fromPartial(object: Partial<_120.Height>): _120.Height;
                };
                Params: {
                    encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
                    fromJSON(object: any): _120.Params;
                    toJSON(message: _120.Params): unknown;
                    fromPartial(object: Partial<_120.Params>): _120.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _124.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerkleRoot;
                    fromJSON(object: any): _124.MerkleRoot;
                    toJSON(message: _124.MerkleRoot): unknown;
                    fromPartial(object: Partial<_124.MerkleRoot>): _124.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _124.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerklePrefix;
                    fromJSON(object: any): _124.MerklePrefix;
                    toJSON(message: _124.MerklePrefix): unknown;
                    fromPartial(object: Partial<_124.MerklePrefix>): _124.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _124.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerklePath;
                    fromJSON(object: any): _124.MerklePath;
                    toJSON(message: _124.MerklePath): unknown;
                    fromPartial(object: Partial<_124.MerklePath>): _124.MerklePath;
                };
                MerkleProof: {
                    encode(message: _124.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MerkleProof;
                    fromJSON(object: any): _124.MerkleProof;
                    toJSON(message: _124.MerkleProof): unknown;
                    fromPartial(object: Partial<_124.MerkleProof>): _124.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _223.MsgClientImpl;
                QueryClientImpl: typeof _218.QueryClientImpl;
                LCDQueryClient: typeof _214.LCDQueryClient;
                MsgConnectionOpenInit: {
                    encode(message: _128.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenInit;
                    fromJSON(object: any): _128.MsgConnectionOpenInit;
                    toJSON(message: _128.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_128.MsgConnectionOpenInit>): _128.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _128.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _128.MsgConnectionOpenInitResponse;
                    toJSON(_: _128.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_128.MsgConnectionOpenInitResponse>): _128.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _128.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenTry;
                    fromJSON(object: any): _128.MsgConnectionOpenTry;
                    toJSON(message: _128.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_128.MsgConnectionOpenTry>): _128.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _128.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _128.MsgConnectionOpenTryResponse;
                    toJSON(_: _128.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_128.MsgConnectionOpenTryResponse>): _128.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _128.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenAck;
                    fromJSON(object: any): _128.MsgConnectionOpenAck;
                    toJSON(message: _128.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_128.MsgConnectionOpenAck>): _128.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _128.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _128.MsgConnectionOpenAckResponse;
                    toJSON(_: _128.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_128.MsgConnectionOpenAckResponse>): _128.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _128.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _128.MsgConnectionOpenConfirm;
                    toJSON(message: _128.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_128.MsgConnectionOpenConfirm>): _128.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _128.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _128.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _128.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_128.MsgConnectionOpenConfirmResponse>): _128.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _127.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionRequest;
                    fromJSON(object: any): _127.QueryConnectionRequest;
                    toJSON(message: _127.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionRequest>): _127.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _127.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionResponse;
                    fromJSON(object: any): _127.QueryConnectionResponse;
                    toJSON(message: _127.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionResponse>): _127.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _127.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionsRequest;
                    fromJSON(object: any): _127.QueryConnectionsRequest;
                    toJSON(message: _127.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionsRequest>): _127.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _127.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionsResponse;
                    fromJSON(object: any): _127.QueryConnectionsResponse;
                    toJSON(message: _127.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionsResponse>): _127.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _127.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryClientConnectionsRequest;
                    fromJSON(object: any): _127.QueryClientConnectionsRequest;
                    toJSON(message: _127.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_127.QueryClientConnectionsRequest>): _127.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _127.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryClientConnectionsResponse;
                    fromJSON(object: any): _127.QueryClientConnectionsResponse;
                    toJSON(message: _127.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_127.QueryClientConnectionsResponse>): _127.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _127.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _127.QueryConnectionClientStateRequest;
                    toJSON(message: _127.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionClientStateRequest>): _127.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _127.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _127.QueryConnectionClientStateResponse;
                    toJSON(message: _127.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionClientStateResponse>): _127.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _127.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _127.QueryConnectionConsensusStateRequest;
                    toJSON(message: _127.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionConsensusStateRequest>): _127.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _127.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _127.QueryConnectionConsensusStateResponse;
                    toJSON(message: _127.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_127.QueryConnectionConsensusStateResponse>): _127.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                    fromJSON(object: any): _126.GenesisState;
                    toJSON(message: _126.GenesisState): unknown;
                    fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                };
                stateFromJSON(object: any): _125.State;
                stateToJSON(object: _125.State): string;
                State: typeof _125.State;
                ConnectionEnd: {
                    encode(message: _125.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConnectionEnd;
                    fromJSON(object: any): _125.ConnectionEnd;
                    toJSON(message: _125.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_125.ConnectionEnd>): _125.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _125.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.IdentifiedConnection;
                    fromJSON(object: any): _125.IdentifiedConnection;
                    toJSON(message: _125.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_125.IdentifiedConnection>): _125.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _125.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Counterparty;
                    fromJSON(object: any): _125.Counterparty;
                    toJSON(message: _125.Counterparty): unknown;
                    fromPartial(object: Partial<_125.Counterparty>): _125.Counterparty;
                };
                ClientPaths: {
                    encode(message: _125.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientPaths;
                    fromJSON(object: any): _125.ClientPaths;
                    toJSON(message: _125.ClientPaths): unknown;
                    fromPartial(object: Partial<_125.ClientPaths>): _125.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _125.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConnectionPaths;
                    fromJSON(object: any): _125.ConnectionPaths;
                    toJSON(message: _125.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_125.ConnectionPaths>): _125.ConnectionPaths;
                };
                Version: {
                    encode(message: _125.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Version;
                    fromJSON(object: any): _125.Version;
                    toJSON(message: _125.Version): unknown;
                    fromPartial(object: Partial<_125.Version>): _125.Version;
                };
                Params: {
                    encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Params;
                    fromJSON(object: any): _125.Params;
                    toJSON(message: _125.Params): unknown;
                    fromPartial(object: Partial<_125.Params>): _125.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _219.QueryClientImpl;
                QueryAppVersionRequest: {
                    encode(message: _129.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryAppVersionRequest;
                    fromJSON(object: any): _129.QueryAppVersionRequest;
                    toJSON(message: _129.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_129.QueryAppVersionRequest>): _129.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _129.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryAppVersionResponse;
                    fromJSON(object: any): _129.QueryAppVersionResponse;
                    toJSON(message: _129.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_129.QueryAppVersionResponse>): _129.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _130.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.GenesisState;
                    fromJSON(object: any): _130.GenesisState;
                    toJSON(message: _130.GenesisState): unknown;
                    fromPartial(object: Partial<_130.GenesisState>): _130.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _131.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial(object: Partial<_131.ClientState>): _131.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _132.DataType;
                dataTypeToJSON(object: _132.DataType): string;
                DataType: typeof _132.DataType;
                ClientState: {
                    encode(message: _132.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientState;
                    fromJSON(object: any): _132.ClientState;
                    toJSON(message: _132.ClientState): unknown;
                    fromPartial(object: Partial<_132.ClientState>): _132.ClientState;
                };
                ConsensusState: {
                    encode(message: _132.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusState;
                    fromJSON(object: any): _132.ConsensusState;
                    toJSON(message: _132.ConsensusState): unknown;
                    fromPartial(object: Partial<_132.ConsensusState>): _132.ConsensusState;
                };
                Header: {
                    encode(message: _132.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Header;
                    fromJSON(object: any): _132.Header;
                    toJSON(message: _132.Header): unknown;
                    fromPartial(object: Partial<_132.Header>): _132.Header;
                };
                Misbehaviour: {
                    encode(message: _132.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Misbehaviour;
                    fromJSON(object: any): _132.Misbehaviour;
                    toJSON(message: _132.Misbehaviour): unknown;
                    fromPartial(object: Partial<_132.Misbehaviour>): _132.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _132.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignatureAndData;
                    fromJSON(object: any): _132.SignatureAndData;
                    toJSON(message: _132.SignatureAndData): unknown;
                    fromPartial(object: Partial<_132.SignatureAndData>): _132.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _132.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TimestampedSignatureData;
                    fromJSON(object: any): _132.TimestampedSignatureData;
                    toJSON(message: _132.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_132.TimestampedSignatureData>): _132.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _132.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.SignBytes;
                    fromJSON(object: any): _132.SignBytes;
                    toJSON(message: _132.SignBytes): unknown;
                    fromPartial(object: Partial<_132.SignBytes>): _132.SignBytes;
                };
                HeaderData: {
                    encode(message: _132.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.HeaderData;
                    fromJSON(object: any): _132.HeaderData;
                    toJSON(message: _132.HeaderData): unknown;
                    fromPartial(object: Partial<_132.HeaderData>): _132.HeaderData;
                };
                ClientStateData: {
                    encode(message: _132.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClientStateData;
                    fromJSON(object: any): _132.ClientStateData;
                    toJSON(message: _132.ClientStateData): unknown;
                    fromPartial(object: Partial<_132.ClientStateData>): _132.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _132.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusStateData;
                    fromJSON(object: any): _132.ConsensusStateData;
                    toJSON(message: _132.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_132.ConsensusStateData>): _132.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _132.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConnectionStateData;
                    fromJSON(object: any): _132.ConnectionStateData;
                    toJSON(message: _132.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_132.ConnectionStateData>): _132.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _132.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ChannelStateData;
                    fromJSON(object: any): _132.ChannelStateData;
                    toJSON(message: _132.ChannelStateData): unknown;
                    fromPartial(object: Partial<_132.ChannelStateData>): _132.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _132.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketCommitmentData;
                    fromJSON(object: any): _132.PacketCommitmentData;
                    toJSON(message: _132.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_132.PacketCommitmentData>): _132.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _132.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketAcknowledgementData;
                    fromJSON(object: any): _132.PacketAcknowledgementData;
                    toJSON(message: _132.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_132.PacketAcknowledgementData>): _132.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _132.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.PacketReceiptAbsenceData;
                    fromJSON(object: any): _132.PacketReceiptAbsenceData;
                    toJSON(message: _132.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_132.PacketReceiptAbsenceData>): _132.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _132.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.NextSequenceRecvData;
                    fromJSON(object: any): _132.NextSequenceRecvData;
                    toJSON(message: _132.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_132.NextSequenceRecvData>): _132.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _133.DataType;
                dataTypeToJSON(object: _133.DataType): string;
                DataType: typeof _133.DataType;
                ClientState: {
                    encode(message: _133.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientState;
                    fromJSON(object: any): _133.ClientState;
                    toJSON(message: _133.ClientState): unknown;
                    fromPartial(object: Partial<_133.ClientState>): _133.ClientState;
                };
                ConsensusState: {
                    encode(message: _133.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusState;
                    fromJSON(object: any): _133.ConsensusState;
                    toJSON(message: _133.ConsensusState): unknown;
                    fromPartial(object: Partial<_133.ConsensusState>): _133.ConsensusState;
                };
                Header: {
                    encode(message: _133.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Header;
                    fromJSON(object: any): _133.Header;
                    toJSON(message: _133.Header): unknown;
                    fromPartial(object: Partial<_133.Header>): _133.Header;
                };
                Misbehaviour: {
                    encode(message: _133.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Misbehaviour;
                    fromJSON(object: any): _133.Misbehaviour;
                    toJSON(message: _133.Misbehaviour): unknown;
                    fromPartial(object: Partial<_133.Misbehaviour>): _133.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _133.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.SignatureAndData;
                    fromJSON(object: any): _133.SignatureAndData;
                    toJSON(message: _133.SignatureAndData): unknown;
                    fromPartial(object: Partial<_133.SignatureAndData>): _133.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _133.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.TimestampedSignatureData;
                    fromJSON(object: any): _133.TimestampedSignatureData;
                    toJSON(message: _133.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_133.TimestampedSignatureData>): _133.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _133.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.SignBytes;
                    fromJSON(object: any): _133.SignBytes;
                    toJSON(message: _133.SignBytes): unknown;
                    fromPartial(object: Partial<_133.SignBytes>): _133.SignBytes;
                };
                HeaderData: {
                    encode(message: _133.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.HeaderData;
                    fromJSON(object: any): _133.HeaderData;
                    toJSON(message: _133.HeaderData): unknown;
                    fromPartial(object: Partial<_133.HeaderData>): _133.HeaderData;
                };
                ClientStateData: {
                    encode(message: _133.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ClientStateData;
                    fromJSON(object: any): _133.ClientStateData;
                    toJSON(message: _133.ClientStateData): unknown;
                    fromPartial(object: Partial<_133.ClientStateData>): _133.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _133.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusStateData;
                    fromJSON(object: any): _133.ConsensusStateData;
                    toJSON(message: _133.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_133.ConsensusStateData>): _133.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _133.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConnectionStateData;
                    fromJSON(object: any): _133.ConnectionStateData;
                    toJSON(message: _133.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_133.ConnectionStateData>): _133.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _133.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ChannelStateData;
                    fromJSON(object: any): _133.ChannelStateData;
                    toJSON(message: _133.ChannelStateData): unknown;
                    fromPartial(object: Partial<_133.ChannelStateData>): _133.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _133.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketCommitmentData;
                    fromJSON(object: any): _133.PacketCommitmentData;
                    toJSON(message: _133.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_133.PacketCommitmentData>): _133.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _133.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketAcknowledgementData;
                    fromJSON(object: any): _133.PacketAcknowledgementData;
                    toJSON(message: _133.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_133.PacketAcknowledgementData>): _133.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _133.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PacketReceiptAbsenceData;
                    fromJSON(object: any): _133.PacketReceiptAbsenceData;
                    toJSON(message: _133.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_133.PacketReceiptAbsenceData>): _133.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _133.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.NextSequenceRecvData;
                    fromJSON(object: any): _133.NextSequenceRecvData;
                    toJSON(message: _133.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_133.NextSequenceRecvData>): _133.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _134.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ClientState;
                    fromJSON(object: any): _134.ClientState;
                    toJSON(message: _134.ClientState): unknown;
                    fromPartial(object: Partial<_134.ClientState>): _134.ClientState;
                };
                ConsensusState: {
                    encode(message: _134.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ConsensusState;
                    fromJSON(object: any): _134.ConsensusState;
                    toJSON(message: _134.ConsensusState): unknown;
                    fromPartial(object: Partial<_134.ConsensusState>): _134.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _134.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Misbehaviour;
                    fromJSON(object: any): _134.Misbehaviour;
                    toJSON(message: _134.Misbehaviour): unknown;
                    fromPartial(object: Partial<_134.Misbehaviour>): _134.Misbehaviour;
                };
                Header: {
                    encode(message: _134.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Header;
                    fromJSON(object: any): _134.Header;
                    toJSON(message: _134.Header): unknown;
                    fromPartial(object: Partial<_134.Header>): _134.Header;
                };
                Fraction: {
                    encode(message: _134.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Fraction;
                    fromJSON(object: any): _134.Fraction;
                    toJSON(message: _134.Fraction): unknown;
                    fromPartial(object: Partial<_134.Fraction>): _134.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _220.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _221.MsgClientImpl;
                    };
                    client: {
                        v1: _222.MsgClientImpl;
                    };
                    connection: {
                        v1: _223.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _215.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _216.QueryClientImpl;
                    };
                    client: {
                        v1: _217.QueryClientImpl;
                    };
                    connection: {
                        v1: _218.QueryClientImpl;
                    };
                    port: {
                        v1: _219.QueryClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _211.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _212.LCDQueryClient;
                    };
                    client: {
                        v1: _213.LCDQueryClient;
                    };
                    connection: {
                        v1: _214.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
