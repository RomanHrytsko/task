import UserComponent from "./UserComponent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../redux";

export default function AllUsersComponent (){

    const {users} = useSelector(({users: {users}}) => ({users}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <div>
            <div className='users-header'>
            <h1>Users</h1>
            <button>POSTS</button>
            </div>
            {users.map((user) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
}