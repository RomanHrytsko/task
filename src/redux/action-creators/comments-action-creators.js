import {services} from "../../services";
import {GET_CHOSEN_COMMENTS} from "../action-types";

const {commentsService} = services



export const getCommentsByID = (id) => async (dispatch) =>{
    const response = await commentsService.getCommentsById(id)
    const json = await response.json()
    dispatch({type: GET_CHOSEN_COMMENTS, payload: json})
}