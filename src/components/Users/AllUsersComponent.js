import UserComponent from "./UserComponent";
import {useDispatch, useSelector} from "react-redux";

import React, {useEffect} from "react";
import {getUsers} from "../../redux";

export default function AllUsersComponent() {
    const {users} = useSelector(({users: {users}}) => ({users}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (


        <div className='pages-main-block'>
            <div className='pages-header'>
                <h1>Users</h1>
            </div>
            <div className='pages-body'>

            {
                users.map((user) => <UserComponent user={user} key={user.id}/>)
            }
            </div>
        </div>


    );
}