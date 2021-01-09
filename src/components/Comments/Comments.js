import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getCommentsByID} from "../../redux";
import CommentsInfoComponent from "./CommentsInfoComponent";
import {getPostInfoById} from "../../redux";


const Comments = ({match, match: {params: {id}}}) => {
    const {chosenComments, details} = useSelector(({

                                                       chosenComments: {chosenComments},
                                                       details: {details}
                                                   }) => ({

        chosenComments,
        details
    }))
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCommentsByID(id))
    }, [id])


    useEffect(() => {
        dispatch(getPostInfoById(id))

    }, [id])


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

            </div>
            <div className='pages-header'>
            <h2>Comments</h2>
            </div>

            <div className='pages-body'>
            {chosenComments.map((comment) => <CommentsInfoComponent comment={comment} key={comment.id}/>)}

            </div>
        </div>
    )


}
export default withRouter(Comments);
