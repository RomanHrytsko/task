import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../redux";
import PostComponent from "./PostComponent";

export default function AllPostsComponent (){
    const {posts} = useSelector(({posts:{posts}}) => ({posts}))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])
    return (

        <div>
            <div className={'pages-header'}>
            <h1>Posts List</h1>
            </div>
            {posts.map((post) => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
}