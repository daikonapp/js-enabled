import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return <ul onClick={(e) => console.log(e.target)} className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/create">Create</Link>
    </ul>
}

export default Navbar;