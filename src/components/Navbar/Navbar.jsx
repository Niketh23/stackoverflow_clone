import React from 'react'
import {Link} from 'react-router-dom' 

import stackImg from '../../assets/stackImg.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'

function Navbar() {
    var User = null
  return (
    <nav className='main-navs'>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                <img src={stackImg} alt="logo" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            { User === null ?
                 <Link to='/Auth' className='nav-item nav-links'>Log-in</Link> :
                 <>
                     <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white' ><Link to='/User' style={{color:'white',textDecoration:'none'}}>M</Link></Avatar>
                     <button className='nav-item nav-links'>Log-Out</button>
                 </>
            }
        </div>
    </nav>
  )
}

export default Navbar