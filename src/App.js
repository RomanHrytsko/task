import React, {useEffect} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import AllUsersComponent from "./components/Users/AllUsersComponent";
import {getUsers, getPost} from "./redux";
import Header from "./components/Header/Header";

export default function App() {
    const {users, posts} = useSelector(({users: {users}, posts: {posts}}) => ({users, posts}))
    const dispatch = useDispatch()

  useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    useEffect(() => {
        dispatch(getPost())
    }, [dispatch])
    console.log(posts)

    return (
        <div>

            <Header/>
            <AllUsersComponent users={users}/>

        </div>
    );
}

