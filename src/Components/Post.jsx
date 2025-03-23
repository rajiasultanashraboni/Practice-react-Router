import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,name,username,email}=post
    return (
        <div className='border border-amber-600 p-4'>
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h1>{email}</h1>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;