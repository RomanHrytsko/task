import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {withRouter} from 'react-router-dom'
import PostWithDetail from "./PostWithDetails";

const AllPostsWistDetails = ({match}) => {
    console.log(match)
    const {posts} = useSelector(({posts: {posts}}) => ({posts}))
    return(
        <div>
            {posts.map((post) =><PostWithDetail post={post} key={post.id} />)}
        </div>
    )
}

export default withRouter(AllPostsWistDetails);