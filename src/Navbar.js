import React from 'react' 
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
      <h2>My_Movie</h2>
      </Link>
      <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
    </div>
    </div>
  )
}

export default Navbar;
