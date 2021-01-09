import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Error from "./components/Error/Error";
import AllUsersComponent from "./components/Users/AllUsersComponent";
import AllUserPosts from "./components/Posts/AllUserPostsComponents";
import Comments from "./components/Comments/Comments";

class App extends Component {
    render() {
        return (
            <Router>

<Switch>

    <Route exact path={'/'} render={() =>{
        return <AllUsersComponent/>
    }}/>
    <Route exact path={'/404'} render={() =>{
        return <Error/>
    }}/>


    <Route exact path={'/posts/userId:id'} render={() =>{
        return <AllUserPosts/>
    }}/>
    <Route exact path={'/comments/postId:id'} render={()=>{
        return <Comments/>
    }}/>
    <Redirect to={'/404'}/>
</Switch>
            </Router>
        );
    }
}

export default App;

