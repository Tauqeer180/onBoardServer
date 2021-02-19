import axios from "axios";
export const Create = (obj, id) => async (dispatch) => {
  try {
   await axios.put("/api/KYC", { kyc: obj, id: id }).then((res) => {
      console.log("kyc action");
      console.log(res.data);
      dispatch({
        type: "CREATE_KYC",
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: "Error",
      payload: error,
    });
  }
};
