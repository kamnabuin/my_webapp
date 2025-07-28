import React from 'react' 
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
      <h2>Watch</h2>
      </Link>
      <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/WeatherDashboard">Weather Dashboard</Link>
    </div>
    </div>
  )
}

export default Navbar;
