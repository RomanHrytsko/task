import {GET_USER_POSTS} from "../action-types";

const initialState = {
    userPosts:[]
}

export default (state = initialState, action) =>{
    switch (action.type){
        case GET_USER_POSTS:{
            return{
                ...state, userPosts: action.payload
            }


        }
        default: return state
    }
}