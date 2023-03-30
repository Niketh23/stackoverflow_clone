import React from 'react'
import './LeftSidebar.css'
import {NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.png'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className="side-nav">
        <NavLink to='/' className='side-nav-links' activeclassName='active'>
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div> <p>PUBLIC</p> </div>
        </div>
        <NavLink to='/Questions' className='side-nav-links'>
          <img src={Globe} height='20px'width='20px' alt="Globe" />
          <p style={{paddingLeft:"10px"}}> Questions</p>
        </NavLink>
        <NavLink to='/Tags' className='side-nav-links' activeclassName='active' style={{paddingLeft:'40px'}}>
          <p>Tags</p>
        </NavLink>
        <NavLink to='/Users' className='side-nav-links' activeclassName='active' style={{paddingLeft:'40px'}}>
          <p>Users</p>
        </NavLink>
      </nav>
    </div>
  )
}

export default LeftSidebar