import * as _132 from "./gal/v1/genesis";
import * as _133 from "./gal/v1/params";
import * as _134 from "./gal/v1/query";
import * as _135 from "./gal/v1/tx";
import * as _136 from "./ibcstaking/v1/genesis";
import * as _137 from "./ibcstaking/v1/params";
import * as _138 from "./ibcstaking/v1/query";
import * as _139 from "./ibcstaking/v1/tx";
import * as _140 from "./mint/v1/genesis";
import * as _141 from "./mint/v1/mint";
import * as _142 from "./mint/v1/query";
import * as _143 from "./oracle/v1/genesis";
import * as _144 from "./oracle/v1/params";
import * as _145 from "./oracle/v1/query";
import * as _146 from "./oracle/v1/tx";
import * as _259 from "./gal/v1/tx.amino";
import * as _260 from "./ibcstaking/v1/tx.amino";
import * as _261 from "./oracle/v1/tx.amino";
import * as _262 from "./gal/v1/tx.registry";
import * as _263 from "./ibcstaking/v1/tx.registry";
import * as _264 from "./oracle/v1/tx.registry";
import * as _265 from "./gal/v1/query.lcd";
import * as _266 from "./ibcstaking/v1/query.lcd";
import * as _267 from "./mint/v1/query.lcd";
import * as _268 from "./oracle/v1/query.lcd";
import * as _269 from "./gal/v1/query.rpc.query";
import * as _270 from "./ibcstaking/v1/query.rpc.query";
import * as _271 from "./mint/v1/query.rpc.query";
import * as _272 from "./oracle/v1/query.rpc.query";
import * as _273 from "./gal/v1/tx.rpc.msg";
import * as _274 from "./ibcstaking/v1/tx.rpc.msg";
import * as _275 from "./oracle/v1/tx.rpc.msg";
export namespace nova {
  export namespace gal {
    export const v1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._259,
      ..._262,
      ..._265,
      ..._269,
      ..._273
    };
  }
  export namespace ibcstaking {
    export const v1 = { ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._260,
      ..._263,
      ..._266,
      ..._270,
      ..._274
    };
  }
  export namespace mint {
    export const v1 = { ..._140,
      ..._141,
      ..._142,
      ..._267,
      ..._271
    };
  }
  export namespace oracle {
    export const v1 = { ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._261,
      ..._264,
      ..._268,
      ..._272,
      ..._275
    };
  }
}