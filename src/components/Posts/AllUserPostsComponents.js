import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getUserPosts} from "../../redux";
import PostForAllUserPosts from "./EachUserPostComponent";

const AllUsersPosts = ({match: {params: {id}}}) => {
    const dispatch = useDispatch()
    const {userPosts} = useSelector(({userPosts: {userPosts}}) => ({userPosts}))
    useEffect(() => {
        dispatch(getUserPosts(id))
    }, [id])


    return (
        <div className='pages-main-block'>
            <div className='pages-header'>
                <h1>User Posts</h1>
            </div>
            <div className='pages-body'>
                {userPosts.map((post) => <PostForAllUserPosts post={post} key={post.id}/>)}
                <button className='addNew-btn'>Add new post</button>
            </div>
        </div>
    )
}
export default withRouter(AllUsersPosts);