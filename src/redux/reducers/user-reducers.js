import {SET_USERS} from "../action-types/users-action-types";

const initialState ={
    users:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case SET_USERS: {

            return {...state, users: action.payload}
        }

        default: {
            return {...state}
        } //TODO create error
    }
}