import React from 'react'
import {Link} from 'react-router-dom'
import img from '../img/brightgreen-nb-logo.png'
function Header() {
   return(
       <>
        <nav className="nav-container">
          <Link className="link logo" to='/'> <h1 className="header-title"> Andrew's Site </h1> </Link>
            <div className="nav-links">
                <Link className="link" to="/">Home</Link> 
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/calculator">Calculator</Link>
            </div>
        </nav>
        </>
        )

}

export default Header