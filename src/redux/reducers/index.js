import {combineReducers} from "redux";
import users from './users-reducers'
import details from './details-reducer'
import userPosts from './userPosts-reducer'
import chosenComments from './chosenCommet-reducer'


export const reducer = combineReducers({
        users,
        details,
        userPosts,
        chosenComments


    }
)