import React from 'react'
import {Link} from "react-router-dom"


export const NavBar = () => {
    return <nav>
       <h1><Link to="/">Fake Website</Link></h1>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
};
