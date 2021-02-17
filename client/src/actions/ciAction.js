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

export const Get = (obj) => async (dispatch) => {
  try {
    axios.get('/api/ci').then((res) =>
      dispatch({
        type: 'GET_CI',
        payload: res.data,
      })
    )
  } catch (err) {
    dispatchEvent({
      type: 'Error',
    })
  }
}
