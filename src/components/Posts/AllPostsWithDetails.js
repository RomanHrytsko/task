import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import PostWithDetail from "./PostWithDetails";
import {getPost} from "../../redux";

const AllPostsWistDetails = ({match}) => {
    const {posts} = useSelector(({posts: {posts}}) => ({posts}))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPost())
    },[dispatch])
    return(
        <div>
            {posts.map((post) =><PostWithDetail post={post} key={post.id} />)}
        </div>
    )
}

export default withRouter(AllPostsWistDetails);