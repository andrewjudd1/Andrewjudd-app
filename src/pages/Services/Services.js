import React from 'react'

import {Link} from 'react-router-dom'
function Services() {
    return (
        <>
            <h1>Services</h1>
           <Link to='/services/consulting'> <button> Consulting</button> </Link>
            <button> Certification</button>
            <button> Marketplace</button>
        </>
    )
}

export default Services