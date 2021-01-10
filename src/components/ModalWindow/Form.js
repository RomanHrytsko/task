import React from 'react'
import {CLOSE_MODAL_WINDOW} from "../../redux";
import {useDispatch} from "react-redux";
import {Field, reduxForm} from "redux-form";


const Form = (props, open) => {
    const dispatch = useDispatch()
    const closeModalWindow = () => dispatch({type: CLOSE_MODAL_WINDOW})
    return (

        <form action="" onSubmit={(e) => {
            e.preventDefault()
        }}>
            <Field component={'input'} name={'UserId'} placeholder={'User id'}/>
            <Field component={'input'} name={'PostNumber'} placeholder={'Post number'}/>
            <Field component={'input'} name={'Title'} placeholder={'Title of the post'}/>
            <Field component={'input'} name={'Body'} placeholder={'Main text'}/>
            <div className='buttons-block'>

                <button className='addNew-btn'>Add</button>
                <button className='delete-btn' onClick={() => closeModalWindow()}>Close</button>
            </div>

        </form>

    )
}
export default Form;

export const ReduxForm = reduxForm({form: 'ModuleWindowForm'})(Form)