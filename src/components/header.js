import React from 'react'
import {Link} from 'react-router-dom'
import img from '../img/brightgreen-nb-logo.png'
function Header() {
   return(
       <>
        <nav className="nav-container">
            <img className="logo" src={img} alt="GoViably logo" />
            <div className="nav-links">
                <Link className="link" to="/">Home</Link> 
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/about">About</Link>
            </div>
        </nav>
        </>
        )

}

export default Header