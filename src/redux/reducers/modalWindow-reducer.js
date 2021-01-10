import {OPEN_MODAL_WINDOW,CLOSE_MODAL_WINDOW,ADD_NEW_POST} from "../action-types";


const initialState = {
    modalWindow: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_WINDOW: {
            return {
                modalWindow: false
            }
        }
        case CLOSE_MODAL_WINDOW:{
            return {
               ...state, modalWindow: true
            }
        }

        default:return state
    }
}