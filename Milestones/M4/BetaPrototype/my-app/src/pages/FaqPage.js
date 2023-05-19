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
                    1. Why are we free?
                    </button>
                <div className="faq-context">
                    <p>ULingual is currently free as we are trying to expand our userbase to get more people
                        to join our community!
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
                   3.  Will there eventually be charges to my account?
                    </button>
                
                <div className="faq-context">
                    <p>
                        ULingual will notify you when we eventually switch to a monthly subscription.
                        We will notify you a month in advance so that way you have time to decide if you'd
                        like to continue to support us.
                    </p> 
                </div>
            </div>
        </div>
    </div>
    );
}

export default FAQ;