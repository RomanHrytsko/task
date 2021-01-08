import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUserPosts} from "../../redux";
import {withRouter} from 'react-router-dom'
import {getUserPosts} from "../../redux/action-creators/userPosts-action-creator";
import PostForAllUserPosts from "./PostForAllUserPosts";

const AllUsersPosts = ({match: {params: {id}}}) =>{
    const dispatch = useDispatch()
 const {userPosts} = useSelector(({userPosts: {userPosts}})=>({userPosts}))
useEffect(() =>{
    dispatch(getUserPosts(id))
},[id])


    return(
        <div>
            {userPosts.map((post) =><PostForAllUserPosts post={post} key={post.id}/>)}
            <button>Add new</button>
        </div>
    )
}
export default withRouter(AllUsersPosts);