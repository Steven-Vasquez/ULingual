import React from "react";
import './stylesheets/TutorProfile.css'
import { Link } from "react-router-dom";


const TutorProfile = () => {

    return(
<div className="tutor-prof-pg">
    <div className="bkg-tutor">
        <section class="profile-container">
            <div class="profile-img-section">
                <img class="profile-img" src="https://placehold.jp/150x150.png"/>
            </div>
                <div class="profile-desc-section">
                    <h2>Tutor Name</h2>
                    <h3>Cost: </h3>
                    <p class="description">
                        Description: </p>
                    <p class="description">
                        Availability: </p>
                    <div class="interests">
                        <span class="int-item">Language Profession:</span>
                        <span class="int-item">Language Profession:</span>
                        <span class="int-item">Language Profession:</span>
                    </div>
                <span class="back">
                <label>
                    <Link to="/TutorsPage">Go Back</Link>
                </label>
            </span>
        </div>
    </section>
    </div>
</div>
    );
}
export default TutorProfile;