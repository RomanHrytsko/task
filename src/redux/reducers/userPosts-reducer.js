import {GET_USER_POSTS, ADD_NEW_POST} from "../action-types";

const initialState = {
    userPosts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_POSTS: {
            return {
                ...state, userPosts: action.payload
            }
        }
        case ADD_NEW_POST: {

            return{
                ...state, userPosts: action.payload
            }
        }
        default:
            return state
    }
}