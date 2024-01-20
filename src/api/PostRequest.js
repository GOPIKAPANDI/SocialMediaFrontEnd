// // import axios from "axios"

// // const API = axios.create({ baseURL: "http://localhost:5000" });

// // export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`)

// // PostRequest.js
// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });

// export const getTimelinePosts = (id) => async (dispatch) => {
//   dispatch({ type: "RETREIVING_START" });
//   try {
//     const { data } = await API.get(`/posts/${id}/timeline`);
//     dispatch({ type: "RETREIVING_SUCCESS", data: data });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "RETREIVING_FAIL" });
//   }
// };

// import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });

// export const getTimelinePostsRequest = (id) => {
//   return API.get(`/posts/${id}/timeline`);
// };

import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`); 
export const likePost = (id , userId) => API.put(`posts/${id}/like`, {userId : userId}) 
