import * as UserApi from "../api/UserRequest"

export const updateUser = (id,formData) => async(dispatch) =>{
    dispatch({type : "UPDATING_START"})
    try {
        const {data} = await UserApi.updateUser(id,formData);
        dispatch({type : "UPDATING_SUCCESS", data: data})
    } catch (error) {
        dispatch({type : "UPDATING_FAIL"}) 
    }
}


export const followUser = (id, data) => async (dispatch) => {
    try {
        const response = await UserApi.followUser(id, data);
        if (response.data !== "User is already followed by you") {
            dispatch({ type: "FOLLOW_USER" });
        } else {
            console.log("User is already followed by you");
            // Handle the case where the user is already followed
        }
    } catch (error) {
        console.error("Error following user:", error);
    }
};

export const unFollowUser = (id,data) => async(dispatch)=>{
    dispatch({type: "UNFOLLOW_USER"}) 
    UserApi.unFollowUser(id,data)
}
// export const unFollowUser = (id, data) => async (dispatch) => {
//     try {
//         const response = await UserApi.unFollowUser(id, data);
//         if (response.data !== "User is already followed by you") {
//             dispatch({type: "UNFOLLOW_USER"}) 
//         } else {
//             // console.log("User is already followed by you");
//             // Handle the case where the user is already followed
//         }
//     } catch (error) {
//         console.error("Error following user:", error);
//     }
// };