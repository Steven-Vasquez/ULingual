import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './stylesheets/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GoChevronDown } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import logo from '../images/Logo.png'
import axios from 'axios';

const Navbar = (props) => {
    const { loggedIn } = props;
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [open, setOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/SearchResults?search=${searchQuery}`);
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }
    
    const handleLogoutRequest = async () => {
        try {
            await axios.post('http://50.18.108.83:3001/logout');
            //await axios.post('http://localhost:3001/logout');
            setOpen(false); // close the drop-menu after API request is performed
            window.location.href = '/'; // redirect to home and reload the app so the session can update values in App.js. Then, the user is recognized as logged out
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" >
                    <img src={logo} alt='ULingual Logo' />
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <div className="nav-search-item">
                <form name="search" onSubmit={handleSearchSubmit && handleClick}>
                        <input type="text" placeholder="Search for a Tutor..." value={searchQuery} onChange={handleSearchInputChange} />
                    </form>
                </div>
                <li className="nav-item" onClick={handleClick}>
                    <Link to="/TutorsPage" >Tutors</Link>
                </li>
                <li className="nav-item" onClick={handleClick}>
                    <Link to="/Pricing&Plans">Pricing & Plans</Link>
                </li>
                <li className='hamburger-container'>
                    <div className='user-icon' onClick={() => { setOpen(!open) }}>
                        <VscAccount size={40} />
                        <GoChevronDown className={`arrow-menu ${open ? 'active' : 'inactive'}`} size={30} />
                    </div>
                    <div className={`drop-menu ${open ? 'active' : 'inactive'}`}>
                        <ul>
                            {loggedIn ? (
                            <li className='drop-menu-item' onClick={handleLogoutRequest}>
                                <Link>Logout</Link>
                            </li>
                            ) : (
                            <li className='drop-menu-item' onClick={handleClick}>
                                <Link to="/Login">Login</Link>
                            </li>
                            )}
                            <li className='drop-menu-item' onClick={handleClick}>
                                <Link to="/Dashboard">Dashboard</Link>
                            </li>
                            <li className='drop-menu-item' onClick={handleClick}>
                                <Link to="/UserProfile">Profile</Link>
                            </li>
                            <li className='drop-menu-item' onClick={handleClick}>
                                <Link to="/FriendsListPage">Friends</Link>
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