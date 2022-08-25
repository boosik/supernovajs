import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { DepositRecord, UndelegateRecord, WithdrawRecord } from "./genesis";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, ClaimableAmountRequest, ClaimableAmountResponse, PendingWithdrawalsRequest, PendingWithdrawalsResponse, ActiveWithdrawalsRequest, ActiveWithdrawalsResponse, QueryDepositRecordRequest, QueryDepositRecordResponse, QueryUndelegateRecordRequest, QueryUndelegateRecordResponse, QueryWithdrawRecordRequest, QueryWithdrawRecordResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `nova/gal/v1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ClaimableAmount */
  async claimableAmount(params: ClaimableAmountRequest): Promise<ClaimableAmountResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    if (typeof params?.transferPortId !== "undefined") {
      options.params.transfer_port_id = params.transferPortId;
    }

    if (typeof params?.transferChannelId !== "undefined") {
      options.params.transfer_channel_id = params.transferChannelId;
    }

    const endpoint = `nova/gal/v1/claimable_amount/${params.address}/${params.zoneId}`;
    return await this.request<ClaimableAmountResponse>(endpoint, options);
  }

  /* PendingWithdrawals */
  async pendingWithdrawals(params: PendingWithdrawalsRequest): Promise<PendingWithdrawalsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    if (typeof params?.transferPortId !== "undefined") {
      options.params.transfer_port_id = params.transferPortId;
    }

    if (typeof params?.transferChannelId !== "undefined") {
      options.params.transfer_channel_id = params.transferChannelId;
    }

    const endpoint = `nova/gal/v1/pending_withdrawals/${params.address}/${params.zoneId}`;
    return await this.request<PendingWithdrawalsResponse>(endpoint, options);
  }

  /* ActiveWithdrawals */
  async activeWithdrawals(params: ActiveWithdrawalsRequest): Promise<ActiveWithdrawalsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    if (typeof params?.transferPortId !== "undefined") {
      options.params.transfer_port_id = params.transferPortId;
    }

    if (typeof params?.transferChannelId !== "undefined") {
      options.params.transfer_channel_id = params.transferChannelId;
    }

    const endpoint = `nova/gal/v1/active_withdrawals/${params.address}/${params.zoneId}`;
    return await this.request<ActiveWithdrawalsResponse>(endpoint, options);
  }

  /* DepositRecords */
  async depositRecords(params: QueryDepositRecordRequest): Promise<QueryDepositRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    const endpoint = `nova/gal/v1/deposit/${params.address}/${params.zoneId}`;
    return await this.request<QueryDepositRecordResponse>(endpoint, options);
  }

  /* UndelegateRecords */
  async undelegateRecords(params: QueryUndelegateRecordRequest): Promise<QueryUndelegateRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    const endpoint = `nova/get/v1/undelegate/${params.address}/${params.zoneId}`;
    return await this.request<QueryUndelegateRecordResponse>(endpoint, options);
  }

  /* WithdrawRecords */
  async withdrawRecords(params: QueryWithdrawRecordRequest): Promise<QueryWithdrawRecordResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.zoneId !== "undefined") {
      options.params.zone_id = params.zoneId;
    }

    const endpoint = `nova/get/v1/withdraw/${params.address}/${params.zoneId}`;
    return await this.request<QueryWithdrawRecordResponse>(endpoint, options);
  }

}