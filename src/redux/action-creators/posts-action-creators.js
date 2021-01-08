import {services} from "../../services";
import {GET_POST_INFO_BY_ID, GET_POSTS} from "../action-types";

const {postsService} = services
export const getPost = () => async (dispatch) => {
    const response = await postsService.getPosts()
    const json = await response.json()
    dispatch({type: GET_POSTS, payload: json})
}
