import {GET_CHOSEN_COMMENTS} from "../action-types";

const initialState = {
    chosenComments:[]
}

export default (state = initialState, action)=>{
    switch (action.type){
        case GET_CHOSEN_COMMENTS: {
            return {...state, chosenComments: action.payload}
        }
        default: return state
    }
}