import {combineReducers} from "redux";
import users from './users-reducers'
import posts from './posts-reducer'
import details from './details-reducer'
import userPosts from './userPosts-reducer'

export const reducer = combineReducers({
        users,
        posts,
        details,
        userPosts
    }
)