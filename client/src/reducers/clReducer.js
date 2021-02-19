const initialState = {
  fcaf: { status: "pending", fileName: "fileName" },
  cdf: { status: "pending", fileName: "fileName" },

  bi: { status: "pending", fileName: "fileName" },
  ota: { status: "pending", fileName: "fileName" },
  aps: { status: "pending", fileName: "fileName" },
  hwua: { status: "pending", fileName: "fileName" },
  wc: { status: "pending", fileName: "fileName" },
  wuod: { status: "pending", fileName: "fileName" },
  owsc: { status: "pending", fileName: "fileName" },
  bp: { status: "pending", fileName: "fileName" },
  ldp: { status: "pending", fileName: "fileName" },
  ldpa: { status: "pending", fileName: "fileName" },
  pad: { status: "pending", fileName: "fileName" },
  sdp: { status: "pending", fileName: "fileName" },
  sdpa: { status: "pending", fileName: "fileName" },
  tdp: { status: "pending", fileName: "fileName" },
  tdpa: { status: "pending", fileName: "fileName" },
  fdp: { status: "pending", fileName: "fileName" },
  fdpa: { status: "pending", fileName: "fileName" },
  coi: { status: "pending", fileName: "fileName" },
  moa: { status: "pending", fileName: "fileName" },
  aoa: { status: "pending", fileName: "fileName" },
  sr: { status: "pending", fileName: "fileName" },
  scs: { status: "pending", fileName: "fileName" },
  ccre: { status: "pending", fileName: "fileName" },
  cbs: { status: "pending", fileName: "fileName" },
  pbs: { status: "pending", fileName: "fileName" },
  pow: { status: "pending", fileName: "fileName" },
  cap: { status: "pending", fileName: "fileName" },
  gofl: { status: "pending", fileName: "fileName" },
  cora: { status: "pending", fileName: "fileName" },
  fodsa: { status: "pending", fileName: "fileName" },
  fcR: { status: "pending", fileName: "fileName" },
  shs: { status: "pending", fileName: "fileName" },
  df: { status: "pending", fileName: "fileName" },
};
export const clReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "CREATE_CL":
      return {
        ...state,
        state: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
