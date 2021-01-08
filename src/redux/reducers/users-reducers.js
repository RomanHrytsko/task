import {GET_USERS,GET_USER_POSTS_API} from "../action-types";

const initialState ={
    users:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case GET_USERS: {

            return {...state, users: action.payload}
        }
        case GET_USER_POSTS_API:{
            return {...state, users: action.payload}
        }

        default: {
            return {...state}
        } //TODO create error
    }
}