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
import * as _262 from "./gal/v1/tx.amino";
import * as _263 from "./ibcstaking/v1/tx.amino";
import * as _264 from "./oracle/v1/tx.amino";
import * as _265 from "./gal/v1/tx.registry";
import * as _266 from "./ibcstaking/v1/tx.registry";
import * as _267 from "./oracle/v1/tx.registry";
import * as _268 from "./gal/v1/query.lcd";
import * as _269 from "./ibcstaking/v1/query.lcd";
import * as _270 from "./mint/v1/query.lcd";
import * as _271 from "./oracle/v1/query.lcd";
import * as _272 from "./gal/v1/query.rpc.query";
import * as _273 from "./ibcstaking/v1/query.rpc.query";
import * as _274 from "./mint/v1/query.rpc.query";
import * as _275 from "./oracle/v1/query.rpc.query";
import * as _276 from "./gal/v1/tx.rpc.msg";
import * as _277 from "./ibcstaking/v1/tx.rpc.msg";
import * as _278 from "./oracle/v1/tx.rpc.msg";
import * as _288 from "./lcd";
import * as _289 from "./rpc.query";
import * as _290 from "./rpc.tx";
export namespace nova {
  export namespace gal {
    export const v1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._262,
      ..._265,
      ..._268,
      ..._272,
      ..._276
    };
  }
  export namespace ibcstaking {
    export const v1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._263,
      ..._266,
      ..._269,
      ..._273,
      ..._277
    };
  }
  export namespace mint {
    export const v1 = { ..._143,
      ..._144,
      ..._145,
      ..._270,
      ..._274
    };
  }
  export namespace oracle {
    export const v1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._264,
      ..._267,
      ..._271,
      ..._275,
      ..._278
    };
  }
  export const ClientFactory = { ..._288,
    ..._289,
    ..._290
  };
}