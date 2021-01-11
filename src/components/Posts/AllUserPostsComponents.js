import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {ADD_NEW_POST, CLOSE_MODAL_WINDOW, getUserPosts, OPEN_MODAL_WINDOW} from "../../redux";
import PostForAllUserPosts from "./EachUserPostComponent";
import ModalWindow from "../ModalWindow/ModalWindowComponent";
import {ReduxForm} from "../ModalWindow/Form";


const AllUsersPosts = ({match: {params: {id}}}) => {


    const dispatch = useDispatch()
    const {userPosts, modalWindow} = useSelector(({userPosts: {userPosts}, modalWindow: {modalWindow}}) => ({
        userPosts,
        modalWindow
    }))
    useEffect(() => {
        dispatch(getUserPosts(id))
    }, [id])
    console.log(modalWindow)
    const openModalWindow = () => dispatch({type: OPEN_MODAL_WINDOW})
    const closeModalWindow = () => dispatch({type: CLOSE_MODAL_WINDOW})
    const addNewPost = () => dispatch({type: ADD_NEW_POST})
    return (
        <div className='pages-main-block'>
            <div className='pages-header'>
                <h1>User Posts</h1>
            </div>
            <div className='pages-body'>
                {userPosts.map((post) => <PostForAllUserPosts post={post} key={post.id}/>)}
                <button onClick={() => openModalWindow()} className='addNewPostBtn'>Add new post</button>
            </div>
            <ModalWindow open={modalWindow} close={closeModalWindow}>
                <h1>Add new Post</h1>
                <div className='inputs-block'>
                    <ReduxForm />
                </div>
            </ModalWindow>




        </div>
    )
}
export default withRouter(AllUsersPosts);