import * as _150 from "./abci/types";
import * as _151 from "./crypto/keys";
import * as _152 from "./crypto/proof";
import * as _153 from "./libs/bits/types";
import * as _154 from "./p2p/types";
import * as _155 from "./types/block";
import * as _156 from "./types/evidence";
import * as _157 from "./types/params";
import * as _158 from "./types/types";
import * as _159 from "./types/validator";
import * as _160 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _150.CheckTxType;
        checkTxTypeToJSON(object: _150.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _150.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _150.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _150.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _150.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _150.EvidenceType;
        evidenceTypeToJSON(object: _150.EvidenceType): string;
        CheckTxType: typeof _150.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _150.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _150.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _150.EvidenceType;
        Request: {
            encode(message: _150.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Request;
            fromJSON(object: any): _150.Request;
            toJSON(message: _150.Request): unknown;
            fromPartial(object: Partial<_150.Request>): _150.Request;
        };
        RequestEcho: {
            encode(message: _150.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestEcho;
            fromJSON(object: any): _150.RequestEcho;
            toJSON(message: _150.RequestEcho): unknown;
            fromPartial(object: Partial<_150.RequestEcho>): _150.RequestEcho;
        };
        RequestFlush: {
            encode(_: _150.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestFlush;
            fromJSON(_: any): _150.RequestFlush;
            toJSON(_: _150.RequestFlush): unknown;
            fromPartial(_: Partial<_150.RequestFlush>): _150.RequestFlush;
        };
        RequestInfo: {
            encode(message: _150.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestInfo;
            fromJSON(object: any): _150.RequestInfo;
            toJSON(message: _150.RequestInfo): unknown;
            fromPartial(object: Partial<_150.RequestInfo>): _150.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _150.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestSetOption;
            fromJSON(object: any): _150.RequestSetOption;
            toJSON(message: _150.RequestSetOption): unknown;
            fromPartial(object: Partial<_150.RequestSetOption>): _150.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _150.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestInitChain;
            fromJSON(object: any): _150.RequestInitChain;
            toJSON(message: _150.RequestInitChain): unknown;
            fromPartial(object: Partial<_150.RequestInitChain>): _150.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _150.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestQuery;
            fromJSON(object: any): _150.RequestQuery;
            toJSON(message: _150.RequestQuery): unknown;
            fromPartial(object: Partial<_150.RequestQuery>): _150.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _150.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestBeginBlock;
            fromJSON(object: any): _150.RequestBeginBlock;
            toJSON(message: _150.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_150.RequestBeginBlock>): _150.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _150.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestCheckTx;
            fromJSON(object: any): _150.RequestCheckTx;
            toJSON(message: _150.RequestCheckTx): unknown;
            fromPartial(object: Partial<_150.RequestCheckTx>): _150.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _150.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestDeliverTx;
            fromJSON(object: any): _150.RequestDeliverTx;
            toJSON(message: _150.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_150.RequestDeliverTx>): _150.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _150.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestEndBlock;
            fromJSON(object: any): _150.RequestEndBlock;
            toJSON(message: _150.RequestEndBlock): unknown;
            fromPartial(object: Partial<_150.RequestEndBlock>): _150.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _150.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestCommit;
            fromJSON(_: any): _150.RequestCommit;
            toJSON(_: _150.RequestCommit): unknown;
            fromPartial(_: Partial<_150.RequestCommit>): _150.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _150.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestListSnapshots;
            fromJSON(_: any): _150.RequestListSnapshots;
            toJSON(_: _150.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_150.RequestListSnapshots>): _150.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _150.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestOfferSnapshot;
            fromJSON(object: any): _150.RequestOfferSnapshot;
            toJSON(message: _150.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_150.RequestOfferSnapshot>): _150.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _150.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestLoadSnapshotChunk;
            fromJSON(object: any): _150.RequestLoadSnapshotChunk;
            toJSON(message: _150.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_150.RequestLoadSnapshotChunk>): _150.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _150.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.RequestApplySnapshotChunk;
            fromJSON(object: any): _150.RequestApplySnapshotChunk;
            toJSON(message: _150.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_150.RequestApplySnapshotChunk>): _150.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _150.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Response;
            fromJSON(object: any): _150.Response;
            toJSON(message: _150.Response): unknown;
            fromPartial(object: Partial<_150.Response>): _150.Response;
        };
        ResponseException: {
            encode(message: _150.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseException;
            fromJSON(object: any): _150.ResponseException;
            toJSON(message: _150.ResponseException): unknown;
            fromPartial(object: Partial<_150.ResponseException>): _150.ResponseException;
        };
        ResponseEcho: {
            encode(message: _150.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseEcho;
            fromJSON(object: any): _150.ResponseEcho;
            toJSON(message: _150.ResponseEcho): unknown;
            fromPartial(object: Partial<_150.ResponseEcho>): _150.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _150.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseFlush;
            fromJSON(_: any): _150.ResponseFlush;
            toJSON(_: _150.ResponseFlush): unknown;
            fromPartial(_: Partial<_150.ResponseFlush>): _150.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _150.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseInfo;
            fromJSON(object: any): _150.ResponseInfo;
            toJSON(message: _150.ResponseInfo): unknown;
            fromPartial(object: Partial<_150.ResponseInfo>): _150.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _150.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseSetOption;
            fromJSON(object: any): _150.ResponseSetOption;
            toJSON(message: _150.ResponseSetOption): unknown;
            fromPartial(object: Partial<_150.ResponseSetOption>): _150.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _150.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseInitChain;
            fromJSON(object: any): _150.ResponseInitChain;
            toJSON(message: _150.ResponseInitChain): unknown;
            fromPartial(object: Partial<_150.ResponseInitChain>): _150.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _150.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseQuery;
            fromJSON(object: any): _150.ResponseQuery;
            toJSON(message: _150.ResponseQuery): unknown;
            fromPartial(object: Partial<_150.ResponseQuery>): _150.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _150.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseBeginBlock;
            fromJSON(object: any): _150.ResponseBeginBlock;
            toJSON(message: _150.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_150.ResponseBeginBlock>): _150.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _150.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseCheckTx;
            fromJSON(object: any): _150.ResponseCheckTx;
            toJSON(message: _150.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_150.ResponseCheckTx>): _150.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _150.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseDeliverTx;
            fromJSON(object: any): _150.ResponseDeliverTx;
            toJSON(message: _150.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_150.ResponseDeliverTx>): _150.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _150.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseEndBlock;
            fromJSON(object: any): _150.ResponseEndBlock;
            toJSON(message: _150.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_150.ResponseEndBlock>): _150.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _150.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseCommit;
            fromJSON(object: any): _150.ResponseCommit;
            toJSON(message: _150.ResponseCommit): unknown;
            fromPartial(object: Partial<_150.ResponseCommit>): _150.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _150.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseListSnapshots;
            fromJSON(object: any): _150.ResponseListSnapshots;
            toJSON(message: _150.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_150.ResponseListSnapshots>): _150.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _150.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseOfferSnapshot;
            fromJSON(object: any): _150.ResponseOfferSnapshot;
            toJSON(message: _150.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_150.ResponseOfferSnapshot>): _150.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _150.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _150.ResponseLoadSnapshotChunk;
            toJSON(message: _150.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_150.ResponseLoadSnapshotChunk>): _150.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _150.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ResponseApplySnapshotChunk;
            fromJSON(object: any): _150.ResponseApplySnapshotChunk;
            toJSON(message: _150.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_150.ResponseApplySnapshotChunk>): _150.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _150.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ConsensusParams;
            fromJSON(object: any): _150.ConsensusParams;
            toJSON(message: _150.ConsensusParams): unknown;
            fromPartial(object: Partial<_150.ConsensusParams>): _150.ConsensusParams;
        };
        BlockParams: {
            encode(message: _150.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BlockParams;
            fromJSON(object: any): _150.BlockParams;
            toJSON(message: _150.BlockParams): unknown;
            fromPartial(object: Partial<_150.BlockParams>): _150.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _150.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.LastCommitInfo;
            fromJSON(object: any): _150.LastCommitInfo;
            toJSON(message: _150.LastCommitInfo): unknown;
            fromPartial(object: Partial<_150.LastCommitInfo>): _150.LastCommitInfo;
        };
        Event: {
            encode(message: _150.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Event;
            fromJSON(object: any): _150.Event;
            toJSON(message: _150.Event): unknown;
            fromPartial(object: Partial<_150.Event>): _150.Event;
        };
        EventAttribute: {
            encode(message: _150.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.EventAttribute;
            fromJSON(object: any): _150.EventAttribute;
            toJSON(message: _150.EventAttribute): unknown;
            fromPartial(object: Partial<_150.EventAttribute>): _150.EventAttribute;
        };
        TxResult: {
            encode(message: _150.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxResult;
            fromJSON(object: any): _150.TxResult;
            toJSON(message: _150.TxResult): unknown;
            fromPartial(object: Partial<_150.TxResult>): _150.TxResult;
        };
        Validator: {
            encode(message: _150.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Validator;
            fromJSON(object: any): _150.Validator;
            toJSON(message: _150.Validator): unknown;
            fromPartial(object: Partial<_150.Validator>): _150.Validator;
        };
        ValidatorUpdate: {
            encode(message: _150.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ValidatorUpdate;
            fromJSON(object: any): _150.ValidatorUpdate;
            toJSON(message: _150.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_150.ValidatorUpdate>): _150.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _150.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.VoteInfo;
            fromJSON(object: any): _150.VoteInfo;
            toJSON(message: _150.VoteInfo): unknown;
            fromPartial(object: Partial<_150.VoteInfo>): _150.VoteInfo;
        };
        Evidence: {
            encode(message: _150.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Evidence;
            fromJSON(object: any): _150.Evidence;
            toJSON(message: _150.Evidence): unknown;
            fromPartial(object: Partial<_150.Evidence>): _150.Evidence;
        };
        Snapshot: {
            encode(message: _150.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Snapshot;
            fromJSON(object: any): _150.Snapshot;
            toJSON(message: _150.Snapshot): unknown;
            fromPartial(object: Partial<_150.Snapshot>): _150.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _152.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Proof;
            fromJSON(object: any): _152.Proof;
            toJSON(message: _152.Proof): unknown;
            fromPartial(object: Partial<_152.Proof>): _152.Proof;
        };
        ValueOp: {
            encode(message: _152.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ValueOp;
            fromJSON(object: any): _152.ValueOp;
            toJSON(message: _152.ValueOp): unknown;
            fromPartial(object: Partial<_152.ValueOp>): _152.ValueOp;
        };
        DominoOp: {
            encode(message: _152.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.DominoOp;
            fromJSON(object: any): _152.DominoOp;
            toJSON(message: _152.DominoOp): unknown;
            fromPartial(object: Partial<_152.DominoOp>): _152.DominoOp;
        };
        ProofOp: {
            encode(message: _152.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ProofOp;
            fromJSON(object: any): _152.ProofOp;
            toJSON(message: _152.ProofOp): unknown;
            fromPartial(object: Partial<_152.ProofOp>): _152.ProofOp;
        };
        ProofOps: {
            encode(message: _152.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ProofOps;
            fromJSON(object: any): _152.ProofOps;
            toJSON(message: _152.ProofOps): unknown;
            fromPartial(object: Partial<_152.ProofOps>): _152.ProofOps;
        };
        PublicKey: {
            encode(message: _151.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.PublicKey;
            fromJSON(object: any): _151.PublicKey;
            toJSON(message: _151.PublicKey): unknown;
            fromPartial(object: Partial<_151.PublicKey>): _151.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _153.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.BitArray;
                fromJSON(object: any): _153.BitArray;
                toJSON(message: _153.BitArray): unknown;
                fromPartial(object: Partial<_153.BitArray>): _153.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _154.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ProtocolVersion;
            fromJSON(object: any): _154.ProtocolVersion;
            toJSON(message: _154.ProtocolVersion): unknown;
            fromPartial(object: Partial<_154.ProtocolVersion>): _154.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _154.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.NodeInfo;
            fromJSON(object: any): _154.NodeInfo;
            toJSON(message: _154.NodeInfo): unknown;
            fromPartial(object: Partial<_154.NodeInfo>): _154.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _154.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.NodeInfoOther;
            fromJSON(object: any): _154.NodeInfoOther;
            toJSON(message: _154.NodeInfoOther): unknown;
            fromPartial(object: Partial<_154.NodeInfoOther>): _154.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _154.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.PeerInfo;
            fromJSON(object: any): _154.PeerInfo;
            toJSON(message: _154.PeerInfo): unknown;
            fromPartial(object: Partial<_154.PeerInfo>): _154.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _154.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.PeerAddressInfo;
            fromJSON(object: any): _154.PeerAddressInfo;
            toJSON(message: _154.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_154.PeerAddressInfo>): _154.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _159.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ValidatorSet;
            fromJSON(object: any): _159.ValidatorSet;
            toJSON(message: _159.ValidatorSet): unknown;
            fromPartial(object: Partial<_159.ValidatorSet>): _159.ValidatorSet;
        };
        Validator: {
            encode(message: _159.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Validator;
            fromJSON(object: any): _159.Validator;
            toJSON(message: _159.Validator): unknown;
            fromPartial(object: Partial<_159.Validator>): _159.Validator;
        };
        SimpleValidator: {
            encode(message: _159.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.SimpleValidator;
            fromJSON(object: any): _159.SimpleValidator;
            toJSON(message: _159.SimpleValidator): unknown;
            fromPartial(object: Partial<_159.SimpleValidator>): _159.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _158.BlockIDFlag;
        blockIDFlagToJSON(object: _158.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _158.SignedMsgType;
        signedMsgTypeToJSON(object: _158.SignedMsgType): string;
        BlockIDFlag: typeof _158.BlockIDFlag;
        SignedMsgType: typeof _158.SignedMsgType;
        PartSetHeader: {
            encode(message: _158.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PartSetHeader;
            fromJSON(object: any): _158.PartSetHeader;
            toJSON(message: _158.PartSetHeader): unknown;
            fromPartial(object: Partial<_158.PartSetHeader>): _158.PartSetHeader;
        };
        Part: {
            encode(message: _158.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Part;
            fromJSON(object: any): _158.Part;
            toJSON(message: _158.Part): unknown;
            fromPartial(object: Partial<_158.Part>): _158.Part;
        };
        BlockID: {
            encode(message: _158.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.BlockID;
            fromJSON(object: any): _158.BlockID;
            toJSON(message: _158.BlockID): unknown;
            fromPartial(object: Partial<_158.BlockID>): _158.BlockID;
        };
        Header: {
            encode(message: _158.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Header;
            fromJSON(object: any): _158.Header;
            toJSON(message: _158.Header): unknown;
            fromPartial(object: Partial<_158.Header>): _158.Header;
        };
        Data: {
            encode(message: _158.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Data;
            fromJSON(object: any): _158.Data;
            toJSON(message: _158.Data): unknown;
            fromPartial(object: Partial<_158.Data>): _158.Data;
        };
        Vote: {
            encode(message: _158.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Vote;
            fromJSON(object: any): _158.Vote;
            toJSON(message: _158.Vote): unknown;
            fromPartial(object: Partial<_158.Vote>): _158.Vote;
        };
        Commit: {
            encode(message: _158.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Commit;
            fromJSON(object: any): _158.Commit;
            toJSON(message: _158.Commit): unknown;
            fromPartial(object: Partial<_158.Commit>): _158.Commit;
        };
        CommitSig: {
            encode(message: _158.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.CommitSig;
            fromJSON(object: any): _158.CommitSig;
            toJSON(message: _158.CommitSig): unknown;
            fromPartial(object: Partial<_158.CommitSig>): _158.CommitSig;
        };
        Proposal: {
            encode(message: _158.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Proposal;
            fromJSON(object: any): _158.Proposal;
            toJSON(message: _158.Proposal): unknown;
            fromPartial(object: Partial<_158.Proposal>): _158.Proposal;
        };
        SignedHeader: {
            encode(message: _158.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.SignedHeader;
            fromJSON(object: any): _158.SignedHeader;
            toJSON(message: _158.SignedHeader): unknown;
            fromPartial(object: Partial<_158.SignedHeader>): _158.SignedHeader;
        };
        LightBlock: {
            encode(message: _158.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.LightBlock;
            fromJSON(object: any): _158.LightBlock;
            toJSON(message: _158.LightBlock): unknown;
            fromPartial(object: Partial<_158.LightBlock>): _158.LightBlock;
        };
        BlockMeta: {
            encode(message: _158.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.BlockMeta;
            fromJSON(object: any): _158.BlockMeta;
            toJSON(message: _158.BlockMeta): unknown;
            fromPartial(object: Partial<_158.BlockMeta>): _158.BlockMeta;
        };
        TxProof: {
            encode(message: _158.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.TxProof;
            fromJSON(object: any): _158.TxProof;
            toJSON(message: _158.TxProof): unknown;
            fromPartial(object: Partial<_158.TxProof>): _158.TxProof;
        };
        ConsensusParams: {
            encode(message: _157.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ConsensusParams;
            fromJSON(object: any): _157.ConsensusParams;
            toJSON(message: _157.ConsensusParams): unknown;
            fromPartial(object: Partial<_157.ConsensusParams>): _157.ConsensusParams;
        };
        BlockParams: {
            encode(message: _157.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.BlockParams;
            fromJSON(object: any): _157.BlockParams;
            toJSON(message: _157.BlockParams): unknown;
            fromPartial(object: Partial<_157.BlockParams>): _157.BlockParams;
        };
        EvidenceParams: {
            encode(message: _157.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.EvidenceParams;
            fromJSON(object: any): _157.EvidenceParams;
            toJSON(message: _157.EvidenceParams): unknown;
            fromPartial(object: Partial<_157.EvidenceParams>): _157.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _157.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ValidatorParams;
            fromJSON(object: any): _157.ValidatorParams;
            toJSON(message: _157.ValidatorParams): unknown;
            fromPartial(object: Partial<_157.ValidatorParams>): _157.ValidatorParams;
        };
        VersionParams: {
            encode(message: _157.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.VersionParams;
            fromJSON(object: any): _157.VersionParams;
            toJSON(message: _157.VersionParams): unknown;
            fromPartial(object: Partial<_157.VersionParams>): _157.VersionParams;
        };
        HashedParams: {
            encode(message: _157.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.HashedParams;
            fromJSON(object: any): _157.HashedParams;
            toJSON(message: _157.HashedParams): unknown;
            fromPartial(object: Partial<_157.HashedParams>): _157.HashedParams;
        };
        Evidence: {
            encode(message: _156.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Evidence;
            fromJSON(object: any): _156.Evidence;
            toJSON(message: _156.Evidence): unknown;
            fromPartial(object: Partial<_156.Evidence>): _156.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _156.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.DuplicateVoteEvidence;
            fromJSON(object: any): _156.DuplicateVoteEvidence;
            toJSON(message: _156.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_156.DuplicateVoteEvidence>): _156.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _156.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.LightClientAttackEvidence;
            fromJSON(object: any): _156.LightClientAttackEvidence;
            toJSON(message: _156.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_156.LightClientAttackEvidence>): _156.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _156.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.EvidenceList;
            fromJSON(object: any): _156.EvidenceList;
            toJSON(message: _156.EvidenceList): unknown;
            fromPartial(object: Partial<_156.EvidenceList>): _156.EvidenceList;
        };
        Block: {
            encode(message: _155.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Block;
            fromJSON(object: any): _155.Block;
            toJSON(message: _155.Block): unknown;
            fromPartial(object: Partial<_155.Block>): _155.Block;
        };
    };
    const version: {
        App: {
            encode(message: _160.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.App;
            fromJSON(object: any): _160.App;
            toJSON(message: _160.App): unknown;
            fromPartial(object: Partial<_160.App>): _160.App;
        };
        Consensus: {
            encode(message: _160.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Consensus;
            fromJSON(object: any): _160.Consensus;
            toJSON(message: _160.Consensus): unknown;
            fromPartial(object: Partial<_160.Consensus>): _160.Consensus;
        };
    };
}
