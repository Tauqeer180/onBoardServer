import axios from "axios"

export const Create = (obj, id) => async (dispatch) => {
try {
    axios.put('/api/sd', {sd:obj, id:id}).then((res)=>{

        dispatch({
            type:'CREATE_SD',
            payload:res.data
        })
    })
    
} 
catch (error) {
    dispatch({
        type:'Error',
        payload: error
    })
}
}