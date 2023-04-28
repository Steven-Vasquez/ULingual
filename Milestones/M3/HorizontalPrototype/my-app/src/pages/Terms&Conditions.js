import React from "react";
import "./stylesheets/TOS.css"
import { Link } from "react-router-dom";


const TOS = () => {
    return(
        <div className="tos-page">
            <div className="tos-content">
                <h1>Terms & Conditions</h1>
                <p>
                These terms and conditions govern your use of this website;
                by using this website, you accept the terms and conditions in full.
                </p>
                <p>
                If you disagree with these terms and Conditions or any part of these
                terms and condition, please refrain from this website. 
                </p>
                <p>
                You must be 18 years of age to use this website, by using this website
                and by agreeing to these terms and condition you warrant and represent
                that you are at least 18 years old.  
                </p>
                <p>
                You must not share your login information with any one, you are the only
                person who should have credentials to your account.
                </p>
            </div>
            <div className="tos-back">
            <label><Link to="/register">Return Back</Link></label> 
            </div>
        </div>

    );
}
export default TOS;