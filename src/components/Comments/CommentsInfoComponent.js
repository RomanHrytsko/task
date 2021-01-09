import React from 'react'


const CommentOfEachUser = ({comment,comment:{postId,name,email,body}}) =>{

    return(
        <div className='comments-block'>

                <h4>PostId: {postId}</h4>
                <h4>Id: {comment.id}</h4>
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
                <h4>Body: {body}</h4>
            <div className='buttons-block'>
            <button className='edit-btn'>Edit</button>
            <button className='delete-btn'>Delete</button>
            </div>

        </div>
    )
}
export default CommentOfEachUser;