import {GET_POST_INFO_BY_ID} from "../action-types";
import {services} from "../../services";

const {postsService} = services
export const getPostInfoById = (id) => async (dispatch) =>{
    const response = await postsService.getPostInfo(id)
    const json = await response.json()
    dispatch({type: GET_POST_INFO_BY_ID, payload:json})
}