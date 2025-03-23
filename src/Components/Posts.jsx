import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
    return (
        <div>
            <h1>posts:{posts.length}</h1>

            <div className='grid grid-cols-3 gap-4 w-[90%] mx-auto'>
            {
                posts.map(post=><Post post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;