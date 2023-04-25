import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { VscAccount } from "react-icons/vsc";
import logo from '../images/Logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" >
                <img src={logo} alt='ULingual Logo' />
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               
            <div class="nav-search-item">
                <form name="search">
                    <input type="text" placeholder="Search..."></input>
                </form>
            </div>
                <li className="nav-item">
                    <Link to="/TutorsPage" >Tutors</Link>
                </li>
                <li className="nav-item">
                    <Link to= "/PricingPage">Pricing & Plans</Link>
                </li>
                <li>
                    <div className='user-icon'>
                    <VscAccount size={40}/>
                    </div>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={25} style={{ color: 'AAF0C1' }} />) : <FaBars size={25} style={{ color: 'AAF0C1' }} />}
            </div>
        </div>

    );

}
export default Navbar