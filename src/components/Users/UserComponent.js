import React from 'react'
import {Link} from "react-router-dom";

export default function UserComponent ({user: {id,name,username,email,address:{street,city, zipcode}}}){


    return (
        <div className='info-block'>



            <h4>{name}</h4>
                <Link to={`/posts/userId${id}`}>
                <button>Posts</button>
                </Link>



        </div>
    );
}