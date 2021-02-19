const initialState = {
  fcaf: "pending",
  bi: "pending",
  ota: "pending",
  aps: "pending",
  hwua: "pending",
  wc: "pending",
  wuod: "pending",
  owsc: "pending",
  bp: "pending",
  ldp: "pending",
  ldpa: "pending",
  pad: "pending",
  sdp: "pending",
  sdpa: "pending",
  tdp: "pending",
  tdpa: "pending",
  fdp: "pending",
  fdpa: "pending",
  coi: "pending",
  moa: "pending",
  aoa: "pending",
  sr: "pending",
  scs: "pending",
  ccre: "pending",
  cbs: "pending",
  pbs: "pending",
  pow: "pending",
  cap: "pending",
  gofl: "pending",
  cora: "pending",
  fodsa: "pending",
  fcR: "pending",
  shs: "pending",
  df: "pending",
};
export const clReducer = (state= initialState, action ) =>{
switch (action.payload) {
    case 'CREATE_CL':
        return{
            ...state, state: action.payload
        }
        break;

    default:
        return state
        break;
}
}