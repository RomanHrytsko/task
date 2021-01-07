import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
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
            {posts.map((post) => <PostComponent post={post} key={post.id}/>)}
        </div>
    );
}