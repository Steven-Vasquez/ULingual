import React, {useState} from "react";
import './stylesheets/ContactUsPage.css';

const ContactPage = () => {

    const [errorMessage, setErrorMessage] = useState({
        username: '',
        email: '',
    });

    const validateUsername = (username) => {
        let error = '';
        if (username.trim() === '') {
          error = 'Username is required';
        }
        setErrorMessage((prevState) => ({ ...prevState, username: error }));
      };

    const validateEmail = (email) => {
        let error = '';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
          error = 'Email is required';
        }
        else if (!emailRegex.test(email) ){
            error = 'Invalid email format';
        }
        setErrorMessage((prevState) => ({ ...prevState, email: error }));
      };  

       return (
    <div className="contact-page">
        <div className="contact">
            <form className="form">
                <h1>Contact Us</h1>
                <div>
                    <input type="text" placeholder="Username" required
                    onBlur={(e) => validateUsername(e.target.value)}
                    />
                    {errorMessage.username && (<span className="error">{errorMessage.username}</span>)}
                </div>
                <div>
                <input type="email" placeholder="Email" required
                onBlur={(e) => validateEmail(e.target.value)}
                />
                {errorMessage.email && (<span className="error">{errorMessage.email}</span>)}
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