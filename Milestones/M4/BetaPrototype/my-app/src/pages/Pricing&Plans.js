import React from "react";
import './stylesheets/PricingPage.css';
import { Link } from "react-router-dom";

 const Pricing = () => {
    return (
    <div className="Plans">
        <div className="pp-st">
            <h1>Plans We Offer</h1>
            <p>
            Here at ULingual we believe in transparency,
            this is why we offer two weeks free of our content to
            allow you to see if we are a fit for you.
            </p>
            <p>
            Like what we have? Choose one of our plans and 
            join our community!
            </p>
        </div>
        <div className="pp-grid">
            <div className="pp-card standard">
                <div className="pkg-name">Standard</div> 
                <div className="pkg-price">
                    <b>$7.00</b>
                    <span>per month</span>
                </div>
                <div className="pkg-features">
                    <div>Access to all Dashboard
                        Content.
                    </div>
                    <div>1 Free Tutor Appointment upon
                        sign up.
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/"><button>Select Plan</button></Link>
                </div>
            </div>

            <div className="pp-card premium">
                <div className="pkg-name">Premium</div> 
                <div className="pkg-price">
                    <b>$14.00</b>
                    <span>per month</span>
                </div>
                <div className="pkg-features">
                    <div>Access to all Dashboard
                        Content.
                    </div>
                    <div>1 Free Tutor Appointment
                        a month.
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/"><button>Select Plan</button></Link>
                </div>
            </div>
            <div className="pp-card golden">
                <div className="pkg-name">Golden</div> 
                <div className="pkg-price">
                    <b>$200.00</b>
                    <span>per year</span>
                </div>
                <div className="pkg-features">
                    <div>Access to all Dashboard
                        Content.
                    </div>
                    <div>4 Free Tutor Appointments
                        a month.
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/"><button>Select Plan</button></Link>
                </div>
            </div>
        </div>

       
    </div>
     );

 }
 export default Pricing;