import {combineReducers} from "redux";
import users from './users-reducers'
import posts from './posts-reducer'
export const reducer = combineReducers({
        users,
        posts
    }
)