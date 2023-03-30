import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/Logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt='ULingual Logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item"> 
                    <Link to="/" >Home</Link> 
                </li>
                <li className="nav-item"> 
                    <Link to="/login">Login</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/" >Tutors</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" >FAQ</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" >Contact Us</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: 'AAF0C1' }} />) : <FaBars size={25} style={{ color: 'AAF0C1' }} />}
            </div>
        </div>

    );

}
export default Navbar