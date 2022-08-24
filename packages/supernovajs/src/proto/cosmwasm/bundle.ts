import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _236 from "./wasm/v1/tx.amino";
import * as _237 from "./wasm/v1/tx.registry";
import * as _238 from "./wasm/v1/query.lcd";
import * as _239 from "./wasm/v1/query.rpc.query";
import * as _240 from "./wasm/v1/tx.rpc.msg";
import * as _282 from "./lcd";
import * as _283 from "./rpc.query";
import * as _284 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240
    };
  }
  export const ClientFactory = { ..._282,
    ..._283,
    ..._284
  };
}