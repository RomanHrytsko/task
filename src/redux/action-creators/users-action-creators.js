import {services} from "../../services";
import {GET_USERS} from "../action-types";

const {userService} = services
export const getUsers = () => async (dispatch) => {
    const response = await userService.getUser()
    const json = await response.json()

    dispatch({type: GET_USERS, payload: json})
}

