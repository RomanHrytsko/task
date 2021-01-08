import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getAllUserPosts} from "../../redux";
import {withRouter} from 'react-router-dom'

const PostsForAllUserPosts = ({match:{params:{id}},post}) =>{
    const dispatch = useDispatch()

    return(
        <div>

        </div>
    )
}

export default withRouter(PostsForAllUserPosts);