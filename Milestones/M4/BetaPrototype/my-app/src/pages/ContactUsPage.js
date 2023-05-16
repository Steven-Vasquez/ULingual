import React, {useState} from "react";
import './stylesheets/ContactUsPage.css';
import axios from "axios";

const ContactPage = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState({
        username: '',
        email: '',
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    // const validateUsername = (username) => {
    //     let error = '';
    //     if (username.trim() === '') {
    //       error = 'Username is required';
    //     }
    //     setErrorMessage((prevState) => ({ ...prevState, username: error }));
    // };

    const validateEmail = (email) => {
        let error = '';
        if (!emailRegex.test(email)) {
            error = 'Valid Format: valid@email.com';
        }
        setErrorMessage((prevState) => ({ ...prevState, email: error }));
    };  
    
    const contactUs = (e) => {
        e.preventDefault();
        if(emailRegex.test(email)) {
            if(message.trim().length == 0) {
                alert("Please enter your message in the text box.");
            } else {
                //axios.post("http://50.18.108.83:3001/contactus", {
                axios.post("http://localhost:3001/contactus", {
                    email: email,
                    message: message
                })
                .then(res => {
                    if(typeof res.data.message !== 'undefined' && res.data.message.length > 0) {
                        alert(res.data.message);
                    } else {
                        alert("Failed to send email. Please try again later.")
                    }
                    console.log(res);
                    window.location.href = '/'; // sends user back to home page
                })
                .catch(err => {
                    console.log(err);
                });
            }
        } else {
            alert("Must enter a valid email address.");
        }
    }

    return (
        <div className="contact-page">
            <div className="contact">
                <form className="form">
                    <h1>Contact Us</h1>
                    {/* <div>
                        <input type="text" placeholder="Username" required
                        onBlur={(e) => validateUsername(e.target.value)}
                        />
                        {errorMessage.username && (<span className="error">{errorMessage.username}</span>)}
                    </div> */}
                    <div>
                        <input type="email" placeholder="Email@email.com" required
                        onChange={(e) => {
                            setEmail(e.target.value)
                            validateEmail(e.target.value)
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                        onFocus={(e) => validateEmail(e.target.value)}
                        />
                        {errorMessage.email && (<span className="error">{errorMessage.email}</span>)}
                    </div>
                    <div>
                        <textarea name="Message" cols={30} rows={10} placeholder="Write your message here..."
                        onBlur={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button onClick={(e) => contactUs(e)} className="btn">
                        Send Ticket
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;