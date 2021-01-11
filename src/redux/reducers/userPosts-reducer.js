import {GET_USER_POSTS, ADD_NEW_POST, EDIT_POST, DELETE_POST} from "../action-types";

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
            const newPost = state.userPosts.filter(el => el.id !== action.payload.id)
            newPost.push(action.payload)
            return {
                ...state, userPosts: newPost
            }
        }


        default:
            return state
    }
}