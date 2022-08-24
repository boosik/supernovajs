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
import * as _241 from "./lcd";
import * as _242 from "./rpc.query";
import * as _243 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._211,
        ..._215,
        ..._220
      };
      export const v2 = { ..._115
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._212,
        ..._216,
        ..._221
      };
    }
    export namespace client {
      export const v1 = { ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._213,
        ..._217,
        ..._222
      };
    }
    export namespace commitment {
      export const v1 = { ..._124
      };
    }
    export namespace connection {
      export const v1 = { ..._125,
        ..._126,
        ..._127,
        ..._128,
        ..._214,
        ..._218,
        ..._223
      };
    }
    export namespace port {
      export const v1 = { ..._129,
        ..._219
      };
    }
    export namespace types {
      export const v1 = { ..._130
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._131
      };
    }
    export namespace solomachine {
      export const v1 = { ..._132
      };
      export const v2 = { ..._133
      };
    }
    export namespace tendermint {
      export const v1 = { ..._134
      };
    }
  }
  export const ClientFactory = { ..._241,
    ..._242,
    ..._243
  };
}