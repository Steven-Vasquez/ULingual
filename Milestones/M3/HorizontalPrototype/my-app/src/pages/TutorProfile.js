import React from "react";
import './stylesheets/TutorProfile.css'
import { Link } from "react-router-dom";


const TutorProfile = () => {

    return(
    <div className="tutor-profile-page">
       <h1>Tutor Proflile</h1>
        <div className='TutorsProfile1'>
                    <div className="UserInfo1">
                        <img className="ProfileImage1" src={"https://placehold.jp/150x150.png"}/>
                        <h2 className="ProfileName1">Tutor Name</h2>
                            <div className="ProfileCost1">
                                <h3>Cost:</h3>
                            </div>  
                    </div>
            <div className="bottom-cont" >
            <label><Link to="/TutorsPage">Return</Link></label> 
            </div>
        </div>
            <div className="descpt">
            <label>Description</label>
            </div>
            <div className="avail">
            <label>Availability</label>
            </div>
            <label><Link to="/TutorsPage">Return</Link></label> 
        </div>
    );
}
export default TutorProfile;