import React from 'react'


const CommentOfEachUser = ({comment:{postId,name,email,body, id}}) =>{



    return(
        <div className='comments-block'>

                <h4>PostId: {postId}</h4>
                <h4>Id: {id}</h4>
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
                <h4>Body: {body}</h4>


        </div>
    )
}
export default CommentOfEachUser;

