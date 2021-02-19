import axios from 'axios'
export const Create = (obj) => async (dipatch) => {
  await axios
    .post('/api/ci', {
      ci: obj,
      name: obj.tpi_rcName,
    })
    .then((res) => {
      // console.log(res.data)
      dipatch({
        type: 'CREATE_CI',
        payload: res.data.state,
        id: res.data._id,
      })
    })
}

export const Get = (obj) => (dispatch) => {
  dispatch(setLoading())

  axios.get('/api/ci').then((res) =>
    dispatch({
      type: 'GET_CI',
      payload: res.data,
    })
  )
}
export const GetOne = (id) => (dispatch) => {
  dispatch(setLoading())
  axios.get('/api/ci/' + id, { id: id }).then((res) => {
    // console.log("from action");
    // console.log(res.data);

    dispatch({
      type: 'GET_CI',
      payload: res.data.ci,
    })
  })
}
export const Update = (obj, id) => async (dispatch) => {
  try {
    let url = '/api/cti'
    axios.put(url, { cti: obj, id: id }).then(
      (res) =>
        dispatch({
          type: 'CREATE_CTI',
          payload: res.data,
        }),
      console.log('XXXXXX' + id)
    )
  } catch {
    dispatch({
      type: 'Error',
    })
  }
}

export const setLoading = () => (dispatch) => {
  dispatch({
    type: 'LOADING',
  })
}
