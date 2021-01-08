import {GET_POSTS,GET_POST_INFO_BY_ID} from "../action-types";

const initialState ={

    posts:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case GET_POSTS: {

            return {...state, posts: action.payload}
        }
        case GET_POST_INFO_BY_ID:{
            return {post: action.payload}
        }

        default: {
            return state
        } //TODO create error
    }
}