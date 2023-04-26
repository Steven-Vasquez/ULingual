import React from "react";
import './StyleSheets/ComingSoon.css';

const FAQ = () => {
    return(
        <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
        <ol>
        <li>Can I get a free trial before I purchase?</li>
        <p>Yes, you can get up to two weeks free of premium content</p>
        <li>Can I share my Login Information?</li>
        <p>No, only users can access their account</p>
        <li>Will there be a monthly charged to my account?</li>
        <p>Yes, unless cancelled before the billing date.</p>
        </ol>
        </div>
    );
}

export default FAQ;