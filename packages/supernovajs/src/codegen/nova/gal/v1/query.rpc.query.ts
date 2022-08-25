import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DepositRecord, UndelegateRecord, WithdrawRecord } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryParamsRequest, QueryParamsResponse, ClaimableAmountRequest, ClaimableAmountResponse, PendingWithdrawalsRequest, PendingWithdrawalsResponse, ActiveWithdrawalsRequest, ActiveWithdrawalsResponse, QueryDepositRecordRequest, QueryDepositRecordResponse, QueryUndelegateRecordRequest, QueryUndelegateRecordResponse, QueryWithdrawRecordRequest, QueryWithdrawRecordResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*null*/

  claimableAmount(request: ClaimableAmountRequest): Promise<ClaimableAmountResponse>;
  /*null*/

  pendingWithdrawals(request: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse>;
  /*null*/

  activeWithdrawals(request: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse>;
  /*null*/

  depositRecords(request: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse>;
  /*null*/

  undelegateRecords(request: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse>;
  /*null*/

  withdrawRecords(request: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.claimableAmount = this.claimableAmount.bind(this);
    this.pendingWithdrawals = this.pendingWithdrawals.bind(this);
    this.activeWithdrawals = this.activeWithdrawals.bind(this);
    this.depositRecords = this.depositRecords.bind(this);
    this.undelegateRecords = this.undelegateRecords.bind(this);
    this.withdrawRecords = this.withdrawRecords.bind(this);
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimableAmount(request: ClaimableAmountRequest): Promise<ClaimableAmountResponse> {
    const data = ClaimableAmountRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "ClaimableAmount", data);
    return promise.then(data => ClaimableAmountResponse.decode(new _m0.Reader(data)));
  }

  pendingWithdrawals(request: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse> {
    const data = PendingWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "PendingWithdrawals", data);
    return promise.then(data => PendingWithdrawalsResponse.decode(new _m0.Reader(data)));
  }

  activeWithdrawals(request: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse> {
    const data = ActiveWithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "ActiveWithdrawals", data);
    return promise.then(data => ActiveWithdrawalsResponse.decode(new _m0.Reader(data)));
  }

  depositRecords(request: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse> {
    const data = QueryDepositRecordRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "DepositRecords", data);
    return promise.then(data => QueryDepositRecordResponse.decode(new _m0.Reader(data)));
  }

  undelegateRecords(request: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse> {
    const data = QueryUndelegateRecordRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "UndelegateRecords", data);
    return promise.then(data => QueryUndelegateRecordResponse.decode(new _m0.Reader(data)));
  }

  withdrawRecords(request: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse> {
    const data = QueryWithdrawRecordRequest.encode(request).finish();
    const promise = this.rpc.request("nova.gal.v1.Query", "WithdrawRecords", data);
    return promise.then(data => QueryWithdrawRecordResponse.decode(new _m0.Reader(data)));
  }

}