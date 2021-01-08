import {GET_USERS,GET_USER_POSTS_API} from "../action-types";

const initialState ={
    users:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case GET_USERS: {

            return {...state, users: action.payload}
        }
        // case GET_USER_POSTS_API:{
        //
        //    const userId = state.users.filter((el)=> el.userId !== action.payload.userId)
        //
        //     if(state.users.userId === action.payload.userId){
        //         userId.push(action.payload)
        //     }
        //
        //     return {...state, users: userId}
        // }

        default: {
            return {...state}
        } //TODO create error
    }
}