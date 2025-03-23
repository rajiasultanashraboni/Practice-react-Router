import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id}=useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[id])
    return (
        <div>
            <h1>{post.name}</h1>
            <h1>{post.username}</h1>
            <h1>{post.email}</h1>
            <h1>{post.id}</h1>
        </div>
    );
};

export default Details;