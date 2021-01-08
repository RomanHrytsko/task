import React from 'react'
import {withRouter} from 'react-router-dom'

const PostsForAllUserPosts = ({match: {params: {id}}, post, post: {userId, title, body}}) => {

    return (
        <div>
            <h4>UserId: {userId}</h4>
            <h4>id: {post.id}</h4>
            <h4>Title: {title}</h4>
            <h4>Body: {body}</h4>
            <hr/>

        </div>
    )
}

export default withRouter(PostsForAllUserPosts);