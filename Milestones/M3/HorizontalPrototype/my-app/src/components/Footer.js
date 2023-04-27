import React from 'react'
import './stylesheets/Footer.css'
import { Link } from 'react-router-dom';
//import { TiDevicePhone } from "react-icons/ti";

function Footer() {
    return(
    <footer>
        <ul className="footing-item">
            <li>
                <Link to="ContactUs">Contact Us</Link>
            </li>
            <li>
                <Link to="AboutUs">About Us</Link>
            </li>
            <li>
                <Link to="FAQ">FAQ</Link>
            </li>
        </ul> 
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