import {services} from "../../services";
import {GET_USER_POSTS} from "../action-types";

const { postsService} = services
export const getUserPosts = (id) => async (dispatch)=>{
    const response = await postsService.getUserPosts(id)
    const json = await response.json()
    dispatch({type:GET_USER_POSTS, payload:json})
}