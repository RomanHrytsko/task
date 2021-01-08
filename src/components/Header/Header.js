import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>

                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </header>

        </div>
    )
}
export default Header;

