import {services} from "../../services";
import {GET_USER_POSTS} from "../action-types";

const { userPostsService} = services
export const getUserPosts = (id) => async (dispatch)=>{
    const response = await userPostsService.getUserPosts(id)
    const json = await response.json()
    console.log(json)
    dispatch({type:GET_USER_POSTS, payload:json})
}