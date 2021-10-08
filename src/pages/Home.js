import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
    return(
        <>
        <h1> Bulding A Sustainable Future</h1>
        <Link to="/services/consulting">
            <button> Contact us! </button>
        </Link>
        </>
    )
}

export default Home