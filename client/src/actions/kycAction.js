export const Create = (obj) => async (dispatch) => {
    try {
        dispatch({
            type : 'CREATE_KYC',
            payload : obj
        })

    }
    catch (error) {
dispatch({
    type:'Error',
    payload:error
})
    }

}