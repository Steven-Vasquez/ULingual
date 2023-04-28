import React from "react";
import './stylesheets/ContactUsPage.css';

const ContactPage = () => {
       return (
    <div className="contact-page">
        <div className="contact">
            <form className="form">
                <h1>Contact Us</h1>
                <div>
                    <input type="text" placeholder="Username"/>
                </div>
                <div>
                <input type="email" placeholder="Email"/>
                </div>
                <div>
                <textarea name="Message" cols={30} rows={10} placeholder="Write your message here..."/>
                </div>
                <button className="btn">Send Form</button>
            </form>
        </div>
    </div>
       );
    }

export default ContactPage;