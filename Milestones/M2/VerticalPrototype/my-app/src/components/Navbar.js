import React, {useState} from 'react'
import './Navbar.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import logo from '../images/Logo.png'

const Navbar = () => 
{
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return(
    <div className="navbar">
        <div className="logo">
            <img src = {logo} alt = 'ULingual Logo'/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item"><a href='/'>Home</a></li>
            <li className="nav-item"><a href='/'>Login</a></li>
            <li className="nav-item"><a href='/'>Tutors</a></li>
            <li className="nav-item"><a href='/'>FAQ</a></li>
            <li className="nav-item"><a href='/'>Contact Us</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  size={25} style={{color: 'AAF0C1'}}/>) : <FaBars size={25} style={{color: 'AAF0C1'}}/>}
        </div>
    </div>

    );
    
}
export default Navbar