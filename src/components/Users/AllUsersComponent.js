import UserComponent from "./UserComponent";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import React, {useEffect} from "react";
import {getUsers} from "../../redux";

export default function AllUsersComponent() {
    const {users} = useSelector(({users: {users}}) => ({users}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (


        <div>
            <div className='pages-header'>
                <h1>Users</h1>
                <Link to={'/postsList'}>
                    <button> POSTS</button>
                </Link>
            </div>
            {
                users.map((user) => <UserComponent user={user} key={user.id}/>)
            }
        </div>


    );
}