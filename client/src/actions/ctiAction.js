import axios from 'axios'
export const Create = (obj, id) => async (dispatch) => {
  try {
    let url = '/api/cti'
    axios.put(url + id, { cti: obj }).then((res) =>
      dispatch({
        type: 'CREATE_CTI',
        payload: res.data,
      })
    )
  } catch {
    dispatch({
      type: 'Error',
    })
  }
}
