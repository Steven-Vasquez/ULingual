import React from "react";
import './stylesheets/FAQ.css';

const FAQ = () => {
    return(
        <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
    <ul>
        <li className="Question">1. Can I get a free trial before I purchase?</li>
        <p>Yes, you can get up to two weeks free of premium content
            prior to beginning a payment plan.
        </p>
        <li className="Question">2. Can I share my Login Information?</li>
        <p>No, account sharing is not allowed within ULingual. 
            You cannot share your account information with others; this is
            for the security of your own account and your personal information.
        </p>
        <li className="Question">3. Will there be a monthly charged to my account?</li>
        <p>Yes, depending on what plan you have you be charged either monthly
            or yearly after your free trial is over.
        </p>
    </ul>
        </div>
    );
}

export default FAQ;