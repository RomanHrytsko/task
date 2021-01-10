import {combineReducers} from "redux";
import users from './users-reducers'
import details from './details-reducer'
import userPosts from './userPosts-reducer'
import chosenComments from './chosenCommet-reducer'
import modalWindow from './modalWindow-reducer'
import { reducer as formReducer } from 'redux-form'


export const reducer = combineReducers({
        users,
        details,
        userPosts,
        chosenComments,
        modalWindow,
        form:formReducer,


    }
)