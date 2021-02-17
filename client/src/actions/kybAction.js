export const Create = (obj) => async (dispatch) => {
    try {
        console.log('action clicked');
      dispatch({
        type: "CREATE_KYB",
        payload: obj,
      });
    } catch (err) {
      dispatch({
        type: "Error in Completed",
      });
      // console.error('Errror from Action');
    }
  };