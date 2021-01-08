import {services} from "../../services";
import {GET_POST_INFO_BY_ID, GET_POSTS, GET_USER_POSTS_API} from "../action-types";

const {postsService} = services
export const getPost = () => async (dispatch) => {
    const response = await postsService.getPosts()
    const json = await response.json()
    dispatch({type: GET_POSTS, payload: json})
}

export const  getAllUserPosts = (id) => async (dispatch)=>{
    const response = await postsService.getUserPosts(id)
    const json = await response.json()
    dispatch({type: GET_USER_POSTS_API, payload:json})
}