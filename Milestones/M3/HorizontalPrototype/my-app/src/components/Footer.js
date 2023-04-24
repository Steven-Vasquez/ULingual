import React from 'react'
import './Footer.css'

function Footer() {
    return(
    <div className='footing'>
        <Link to="ContactUs">Contact Us</Link>
        <Link to="AboutUs">About Us</Link>
        <Link to="FAQ">FAQ</Link>
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