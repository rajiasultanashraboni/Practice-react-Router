import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
        <div className='flex gap-6'> 
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/users">Users</Link>
        </div>
    );
};

export default Nav;