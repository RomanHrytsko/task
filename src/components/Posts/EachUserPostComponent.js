import React from 'react'
import {Link, } from 'react-router-dom'

const PostsForAllUserPosts = ({ post: {userId, id, title, body}}) => {

    return (
        <div className='info-block'>
            <h3>Post №{id}</h3>
            <Link to={`/comments/postId${id}`}>
            <button>Details</button>
            </Link>
            <hr/>

        </div>
    )
}

export default PostsForAllUserPosts;