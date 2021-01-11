import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_MODAL_WINDOW, DELETE_POST, getCommentsByID, getPostInfoById, OPEN_MODAL_WINDOW} from "../../redux";
import CommentsInfoComponent from "./CommentsInfoComponent";
import ModalWindow from "../ModalWindow/ModalWindowComponent";
import {ReduxEditForm} from "./EditForm";


const Comments = ({match, match: {params: {id}}}) => {
    const {chosenComments, details, modalWindow} = useSelector(({

                                                                    chosenComments: {chosenComments},
                                                                    details: {details},
                                                                    modalWindow: {modalWindow}
                                                                }) => ({

        chosenComments,
        details,
        modalWindow
    }))
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCommentsByID(id))
    }, [id])


    useEffect(() => {
        dispatch(getPostInfoById(id))

    }, [id])

    const openModalWindow = () => dispatch({type: OPEN_MODAL_WINDOW})
    const closeModalWindow = () => dispatch({type: CLOSE_MODAL_WINDOW})

    const onHandleDelete = () =>{
        if(window.confirm('Are you sure?')){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',

            }).then(value => value.json()).then(value => {
                dispatch({type:DELETE_POST, payload: value})
            });
        }
    }


    return (
        <div className='pages-main-block'>
            <div className='pages-header'>

                <h1>Full info about post</h1>
            </div>

            <div className='full-post-info-block'>

                <h2>UserID: {details.userId}</h2>
                <h2>ID: {details.id}</h2>
                <h2>Title: {details.title}</h2>
                <h2>Body: {details.body}</h2>
                <div className='buttons-block'>

                    <button className='edit-btn' onClick={() => openModalWindow()}>Edit</button>
                    <button className='delete-btn' onClick={() => {
                        onHandleDelete()
                    }}>Delete</button>
                </div>
            </div>
            <div className='pages-header'>
                <h2>Comments</h2>
            </div>

            <div className='pages-body'>
                {chosenComments.map((comment) => <CommentsInfoComponent comment={comment} key={comment.id}/>)}

            </div>
            <ModalWindow open={modalWindow} close={closeModalWindow} id={id}>
                <h1>Edit post</h1>
                <ReduxEditForm id={id}/>

            </ModalWindow>
        </div>
    )


}
export default withRouter(Comments);
