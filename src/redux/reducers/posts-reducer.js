import {GET_POSTS, GET_USER_POSTS_API} from "../action-types";

const initialState = {

    posts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS: {

            return {...state, posts: action.payload}
        }
        case GET_USER_POSTS_API: {

            const userId = state.posts.filter((el) => el.userId !== action.payload.userId)

            if (state.posts.userId === action.payload.userId) {
                userId.push(action.payload)
            }

            return {...state, posts: userId}
        }

        default: {
            return state
        } //TODO create error
    }
}