import React from "react";
import './StyleSheets/ContactUsPage.css';

const ContactPage = () => {
       return (
    <div className="contact-page">
        <div className="contact">
            <form className="form">
                <h1>Contact Us</h1>
                <div className="form-grouping">
                    <input type="text" placeholder="Username"/>
                </div>
                <div class="form__group">
                <input type="email" placeholder="Email"/>
                </div>
                <div class="form__group">
                <textarea name="Message" cols={30} rows={10} placeholder="Right your message here..."/>
                </div>
                <button className="btn">Send Form</button>
            </form>
        </div>
    </div>
       );
    }

export default ContactPage;