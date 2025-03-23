import React from 'react';
import User from './User';

const Users = ({users}) => {
    return (
        <div >
            <h1>Users:{users.length}</h1>

            <div className='grid grid-cols-3 gap-4 w-[80%] mx-auto'>

            {
                users.map(user=><User user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;