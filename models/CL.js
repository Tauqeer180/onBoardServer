const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CLSchema = new Schema(
  {
    cl: {
      fcaf: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      bi: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      ota: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      aps: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      hwua: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      wc: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      wuod: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      owsc: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      bp: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      ldp: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      ldpa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      pad: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      sdp: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      sdpa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      tdp: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      tdpa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      fdp: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      fdpa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      coi: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      moa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      aoa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      sr: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      scs: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      ccre: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      cbs: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      pbs: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      pow: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      cap: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      gofl: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      cora: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      fodsa: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      fcR: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      shs: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
      df: {
        status: {
          type: String,
        },
        fileName: {
          type: String,
        },
      },
    },
  },
  {
    collection: "Records",
  }
);
module.exports = CL = mongoose.model("CL", CLSchema);
