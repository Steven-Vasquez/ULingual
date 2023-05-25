import React from 'react'
import './stylesheets/Footer.css'
import { Link } from 'react-router-dom';
//import { TiDevicePhone } from "react-icons/ti";

function Footer() {
    return(
    <footer className="footing">
        <div className='footing-item'>
                <Link to="ContactUs">Contact Us </Link>
            </div>
            <div className='footing-item-focus'>
                <Link to="AboutUs">About Us </Link>
            </div>
            <div className='footing-item'>
                <Link to="FAQ">FAQ</Link>
            </div>    
    </footer>
        /* FOOTER
        * - ULingual actions:
        * - Tutors by language 
        * - Socials
        * - Terms & privacy
        */
    );
}

export default Footer;