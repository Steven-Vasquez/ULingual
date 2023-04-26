import React from "react";
import './StyleSheets/PricingPage.css';

 const Pricing = () => {
    return (
        <div className="Plans">
        <h1>Plans We Offer</h1>
        <p>Here at ULingual we believe in transparency,
            this is why we offer two weeks free of our content to
            allow you to see if we are a fit for you.
        </p>
        <p>Like what we have? Choose one of our plans and 
            welcome to our community!
        </p>
        <ul className="plan-options">
            <li>
                $7 Monthly Subscription 
                <br></br>
                <p2>Have access to all our content!</p2>
            </li>

            <li>
                $65 Yearly Subscription
                <br></br>
                <p2>Have access to all our content plus 
                    3 free tutor sessions!</p2>
            </li>
        </ul>
        </div>
     );

 }
 export default Pricing;