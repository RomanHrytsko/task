export default function UserComponent ({user: {id,name,username,email,address:{street,city, zipcode}}}){


    return (
        <div>
            <div>

            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            </div>
            <hr/>

        </div>
    );
}