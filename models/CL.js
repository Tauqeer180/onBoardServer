const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CLSchema = new Schema(
  {
    cl: {
      fcaf: {
        type: String,
      },
      bi: {
        type: String,
      },
      ota: {
        type: String,
      },
      aps: {
        type: String,
      },
      hwua: {
        type: String,
      },
      wc: {
        type: String,
      },
      wuod: {
        type: String,
      },
      owsc: {
        type: String,
      },
      bp: {
        type: String,
      },
      ldp: {
        type: String,
      },
      ldpa: {
        type: String,
      },
      pad: {
        type: String,
      },
      sdp: {
        type: String,
      },
      sdpa: {
        type: String,
      },
      tdp: {
        type: String,
      },
      tdpa: {
        type: String,
      },
      fdp: {
        type: String,
      },
      fdpa: {
        type: String,
      },
      coi: {
        type: String,
      },
      moa: {
        type: String,
      },
      aoa: {
        type: String,
      },
      sr: {
        type: String,
      },
      scs: {
        type: String,
      },
      ccre: {
        type: String,
      },
      cbs: {
        type: String,
      },
      pbs: {
        type: String,
      },
      pow: {
        type: String,
      },
      cap: {
        type: String,
      },
      gofl: {
        type: String,
      },
      cora: {
        type: String,
      },
      fodsa: {
        type: String,
      },
      fcR: {
        type: String,
      },
      shs: {
        type: String,
      },
      df: {
        type: String,
      },
    },
  },
  {
    collection: "Records",
  }
);
module.exports = CL = mongoose.model("CL", CLSchema);
