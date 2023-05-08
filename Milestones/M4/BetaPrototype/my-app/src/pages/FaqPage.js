import React from "react";
import './stylesheets/FAQ.css';
import { GoChevronDown } from "react-icons/go";

const FAQ = () => {
    return(
    <div className="faq-pg">
        <div className="FAQ">
                <h1>Frequently Asked Questions</h1>

            <div className="faq-sec">
                    <button className="faq-drop">
                    1. Can I get a free trial before I purchase?
                    </button>
                <div className="faq-context">
                    <p>Yes, you can get up to two weeks free of premium content
                    prior to beginning a payment plan.
                    </p> 
                </div>
            </div>
            <div className="faq-sec">
                    <button className="faq-drop">
                    2. Can I share my Login Information?
                    </button>
                
                <div className="faq-context">
                    <p>
                        No, account sharing is not allowed within ULingual. 
                        You cannot share your account information with others; this is
                        for the security of your own account and your personal information.
                    </p> 
                </div>
            </div>
            <div className="faq-sec">
                    <button className="faq-drop">
                   3.  Will there be a monthly charged to my account?
                    </button>
                
                <div className="faq-context">
                    <p>
                        Yes, depending on what plan you have you be charged either monthly
                        or yearly after your free trial is over.
                    </p> 
                </div>
            </div>
        </div>
    </div>
    );
}

export default FAQ;