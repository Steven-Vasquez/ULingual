import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './stylesheets/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GoChevronDown } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import logo from '../images/Logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [open, setOpen] = useState(false);

    // const [searchQuery, setSearchQuery] = useState('');
    // const navigate = useNavigate();

    // const handleSearchSubmit = (event) => {
    //     event.preventDefault();
    //     // navigate(`/SearchResults?search=${searchQuery}`);
    // }

    // const handleSearchInputChange = (event) => {
    //     setSearchQuery(event.target.value);
    // }
    
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt='ULingual Logo' />
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <div className="nav-search-item">
                <form name="search" /*onSubmit={handleSearchSubmit}*/>
                        <input type="text" placeholder="Search..." /*value={searchQuery} onChange={handleSearchInputChange} *//>
                    </form>
                </div>
                <li className="nav-item">
                    <Link to="/TutorsPage" >Tutors</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Pricing&Plans">Pricing & Plans</Link>
                </li>
                <li>
                    <div className='user-icon' onClick={() => { setOpen(!open) }}>
                        <VscAccount size={40} />
                        <GoChevronDown className={`arrow-menu ${open ? 'active' : 'inactive'}`} size={30} />
                    </div>
                    <div className={`drop-menu ${open ? 'active' : 'inactive'}`}>
                        <ul>
                        <li className='drop-menu-item'>
                                <Link to="/Login">Login</Link>
                            </li>
                            <li className='drop-menu-item'>
                                <Link to="/Dashboard">Dashboard</Link>
                            </li>
                            <li className='drop-menu-item'>
                                <Link to="/UserProfile">Profile</Link>
                            </li>
                            <li className='drop-menu-item'>
                                <Link to="/">Friends</Link>
                            </li>
                        </ul>
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