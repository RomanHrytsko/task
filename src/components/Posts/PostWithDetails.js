import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { Link,withRouter} from "react-router-dom";
import {getPostInfoById} from "../../redux";

const PostWithDetail = ({match,post:{userId, id, title, body}}) => {
const dispatch = useDispatch()


    return(
        <div>
            <h4>Id: {id}</h4>
            <h4>body: {body}</h4>
            <div className={'PostDetailsButtons'}>
               <Link to={'/userDetails' + '/' + id}>
                <button>Details</button>
               </Link>
            </div>
            <hr/>
        </div>
    )
}
export default withRouter(PostWithDetail);