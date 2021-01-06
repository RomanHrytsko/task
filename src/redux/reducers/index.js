import {combineReducers} from "redux";
import users from './user-reducers'
export const reducer = combineReducers(
    users
)