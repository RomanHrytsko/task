import UserComponent from "./UserComponent";

export default function AllUsersComponent ({users}){



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