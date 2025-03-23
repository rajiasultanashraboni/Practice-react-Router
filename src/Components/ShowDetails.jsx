import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowDetails = () => {
    const{id} = useParams()
    const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])
    return (
        <div>
            <h1>{user.title}</h1>
            <h1>{user.body}</h1>
            <h1>{user.id}</h1>
        </div>
    );
};

export default ShowDetails;