import axios from 'axios';
export const Create = (obj, id) => async (dispatch) => {
    try {
        axios.put('/api/kyc', {kyc: obj, id:id}).then((res)=>{
            
            dispatch({
                type : 'CREATE_KYC',
                payload : res.data,
            })
        })

    }
    catch (error) {
dispatch({
    type:'Error',
    payload:error
})
    }

}