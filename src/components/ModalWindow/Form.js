import React from 'react'
import {ADD_NEW_POST, CLOSE_MODAL_WINDOW} from "../../redux";
import {useDispatch} from "react-redux";
import {Field, reduxForm} from "redux-form";
const Form = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const closeModalWindow = () => dispatch({type: CLOSE_MODAL_WINDOW})
    const onSubmitHandler = post =>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body: JSON.stringify(post),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        }).then(value => value.json()).then(value => {
            console.log(value)
            dispatch({type: ADD_NEW_POST, payload: value})
        })
    }
    return (

        <form action="" onSubmit={(e)=> e.preventDefault()} >
            <Field component={'input'} name={'title'} placeholder={'Title of the post'}/>
            <Field component={'input'} name={'body'} placeholder={'Main text'}/>
            <div className='buttons-block'>

                <button className='post-btn' onClick={props.handleSubmit(onSubmitHandler)}>Add</button>
                <button className='delete-btn' onClick={() => closeModalWindow()}>Close</button>
            </div>

        </form>

    )
}
export default Form;

export const ReduxForm = reduxForm({form: 'ModuleWindowForm'}) (Form)

// dispatch({type:ADD_NEW_POST, payload:value})