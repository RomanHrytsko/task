import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getPostInfoById} from "../../redux/action-creators/details-action-creators";

const UserDetail = ({match,match:{params:{id}}}) =>{
    const {details} = useSelector(({details:{details}}) =>({details}))
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getPostInfoById(details.userId))

    },[details.userId])

    console.log(details)
    return (
        <div>

                <h1>Full info about post</h1>
            <br/>
                <h2>UserID: {details.userId}</h2>
                <h2>ID: {details.id}</h2>
                <h2>Title: {details.title}</h2>
                <h2>Body: {details.body}</h2>

        </div>
    )
}
export default withRouter(UserDetail);