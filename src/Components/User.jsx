import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,body,title}=user
    return (
        <div className='border border-amber-400 p-6'>
            <h1>User iD:{id}</h1>
            <p>User body: {body}</p>
            <p>User title: {title}</p>
            <Link to={`/user/${id}`}><button className='btn cursor-pointer'>Show details</button></Link>
        </div>
    );
};

export default User;