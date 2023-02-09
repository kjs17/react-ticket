import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='home_nav'>
          <span><a href = "/">Home</a></span>
          <span>|</span>
          <span><a href = "/submit">Submit Ticket</a></span>
          <span>|</span>
          <span><a href = "/view">Ticket Viewer</a></span>
        </div>
  )
}

export default Navbar