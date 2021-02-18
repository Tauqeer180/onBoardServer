import axios from 'axios';
export const Create = (obj, id) => async (dispatch) => {
  try {
    let url = '/api/cti'
    axios.put(url, { cti: obj, id : id }).then((res) =>
    dispatch({
      type: 'CREATE_CTI',
      payload: res.data,
    }),
    console.log('XXXXXX'+id),
    )
  } catch {
    dispatch({
      type: 'Error',
    })
  }
}
