import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllUserPosts, getPost} from "../../redux";
import {withRouter} from 'react-router-dom'
import PostForAllUserPosts from "./PostForAllUserPosts";
import {getPostInfoById} from "../../redux/action-creators/details-action-creators";

const AllUsersPosts = ({match: {params: {id}}}) =>{
    const dispatch = useDispatch()
    const {details} = useSelector(({details:{details}}) => ({details}))
useEffect(() =>{
    dispatch(getPostInfoById(id))
},[id])


    console.log(details)
    return(
        <div>
            <h2>posts</h2>
        </div>
    )
}
export default withRouter(AllUsersPosts);