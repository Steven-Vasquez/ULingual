import React from 'react'
import './Footer.css'

function Footer() {
    return(
    <div className='footing'>
        <ul className="nav-item">
        <li><Link to="ContactUs">Contact Us</Link>
        </li>
        <li><Link to="AboutUs">About Us</Link>
        </li>
        <li><Link to="FAQ">FAQ</Link>
        </li>
        </ul> 
    </div>
        /* FOOTER
        * - ULingual actions:
        * - Tutors by language
        * - Socials
        * - Terms & privacy
        */
    );
}

export default Footer;