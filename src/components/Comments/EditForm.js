import React from 'react'
import { CLOSE_MODAL_WINDOW, EDIT_POST} from "../../redux";
import {useDispatch} from "react-redux";
import {Field, reduxForm} from "redux-form";
const EditForm = (props, {id}) => {

    const dispatch = useDispatch()
    const closeModalWindow = () => dispatch({type: CLOSE_MODAL_WINDOW})
    const onSubmitHandler = post =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`,{
            method:'PUT',
            body: JSON.stringify(post),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        }).then(value => value.json()).then(value => {
            console.log(value)
            dispatch({type:EDIT_POST, payload:value})

        })
    }
    return (

        <form action="" onSubmit={props.handleSubmit(onSubmitHandler)}>
            <Field component={'input'} name={'userId'} placeholder={'userid'}/>
            <Field component={'input'} name={'title'} placeholder={'title'}/>
            <Field component={'input'} name={'body'} placeholder={'body'}/>
            <div className='buttons-block'>

                <button className='addNew-btn'>Add</button>
                <button className='delete-btn' onClick={() => closeModalWindow()}>Close</button>
            </div>

        </form>

    )
}
export default EditForm;

export const ReduxEditForm = reduxForm({form: 'EditForm1'}) (EditForm)