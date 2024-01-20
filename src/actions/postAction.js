// import * as PostApi from '../api/PostRequest.js'

// export const getTimelinePosts = (id) => async (dispatch) => {
//     dispatch({ type: "RETREIVING_START" });
//     try {
//         const { data } = await PostApi.getTimelinePosts(id);
//         dispatch({ type: "RETREIVING_SUCCESS", data: data });
//     } catch (error) {
//         console.log(error);
//         dispatch({ type: "RETREIVING_FAIL" })
//     }
// }; 
// import * as PostApi from '../api/PostRequest.js';

// export const getTimelinePosts = (id) => async (dispatch) => {
//   dispatch({ type: "RETREIVING_START" });
//   try {
//     const { data } = await PostApi.getTimelinePostsRequest(id);
//     dispatch({ type: "RETREIVING_SUCCESS", data: data });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "RETREIVING_FAIL" });
//   }
// };
import * as PostsApi from "../api/PostRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};
