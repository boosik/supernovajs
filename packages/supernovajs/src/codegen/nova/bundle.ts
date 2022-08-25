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
import * as _244 from "./lcd";
import * as _245 from "./rpc.query";
import * as _246 from "./rpc.tx";
export namespace nova {
  export namespace gal {
    export const v1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._224,
      ..._228,
      ..._232
    };
  }
  export namespace ibcstaking {
    export const v1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._225,
      ..._229,
      ..._233
    };
  }
  export namespace mint {
    export const v1 = { ..._143,
      ..._144,
      ..._145,
      ..._226,
      ..._230
    };
  }
  export namespace oracle {
    export const v1 = { ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._227,
      ..._231,
      ..._234
    };
  }
  export const ClientFactory = { ..._244,
    ..._245,
    ..._246
  };
}