import {DELETE_POST, EDIT_POST, GET_POST_INFO_BY_ID} from "../action-types";

const initialState ={

    details:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {

        case GET_POST_INFO_BY_ID:{
            return {...state,details: action.payload}
        }
        case EDIT_POST: {


            return {
                ...state, details: action.payload
            }
        }
        case DELETE_POST: {
            return {
                ...state, details: action.payload
            }
        }

        default: {
            return state
        }
    }
}