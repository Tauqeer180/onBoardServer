import axios from 'axios'
export const Create = (obj) => (dipatch) => {
  axios
    .post('/api/ci', {
      ci: obj,
      name: obj.tpi_rcName,
    })
    .then((res) => {
      //   console.log(res.data._id)
      dipatch({
        type: 'CREATE_CI',
        payload: res.data,
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
export const GetOne = (id) => async (dispatch) => {
  dispatch(setLoading())
  await axios.get('/api/ci/', { id: id }).then(
    (res) => console.log(res.data)
    // dispatch({
    //   type: 'GET_CI',
    //   payload: res.data,
    // })
  )
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
