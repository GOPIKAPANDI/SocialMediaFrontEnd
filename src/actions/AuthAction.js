import * as AuthApi from '../api/AuthRequest.js' 

// console.log(AuthApi); 

export const logIn = (formData) => async(dispatch) => {

    dispatch({type: "AUTH_START"});  
    //Interaction with reducer(dispatch a reducer with type authstart [To tell the reducer that authentication started]) 
    try {
        const {data} = await AuthApi.logIn(formData);
        dispatch({type : "AUTH_SUCCESS" , data:data});
    } catch (error) {
        console.log(error) 
        dispatch({type: "AUTH_FAIL"});
    }
}

export const signUp = (formData) => async(dispatch) => {
    dispatch({type: "AUTH_START"}); //Interaction with reducer
    try {
        const {data} = await AuthApi.signUp(formData);
        dispatch({type : "AUTH_SUCCESS" , data:data}); 
    } catch (error) {
        console.log(error);
        dispatch({type: "AUTH_FAIL"});
    }
};

export const logOut = () => async(dispatch) => {
    dispatch({type : "LOG_OUT"}); 
}