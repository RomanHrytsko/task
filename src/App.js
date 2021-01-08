import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Switch, Route,Redirect} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import AllPostsComponent from "./components/Posts/AllPostsComponent";
import AllUsersComponent from "./components/Users/AllUsersComponent";
import HomePage from "./components/HomePage/HomePage";
import Posts from "./components/Posts/AllPostsWithDetails";
import UserDetail from "./components/Details/UserDetails";
import PostWithDetail from "./components/Posts/PostWithDetails";
import AllPostsWistDetails from "./components/Posts/AllPostsWithDetails";

class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
<Switch>
    <Route exact path={'/'} render={() =>{
        return <HomePage/>
    }}/>
    <Route exact path={'/404'} render={() =>{
        return <Error/>
    }}/>
    <Route exact  path={'/posts'} render={() =>{
        return <AllPostsWistDetails/>
    }}/>
    <Route exact path={'/postsList'} render={()=>{
        return <AllPostsComponent/>
    }}/>
    <Route exact path={'/users'} render={() =>{
        return <AllUsersComponent/>
    }}/>
    <Route exact path={'/userDetails/:id'} render={() =>{
        return <UserDetail/>
    }}/>
    <Redirect to={'/404'}/>
</Switch>
            </Router>
        );
    }
}

export default App;

