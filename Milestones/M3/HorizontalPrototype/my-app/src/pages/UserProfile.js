import React from "react";
import './stylesheets/UserProfile.css'
import { Link } from "react-router-dom";

const UserProfile = () => {
    return(
    <div className="user-entire">
            <div className='UserProfile'>
                <div className="User-Info">
                    <img className="ProfileImage" src ={"https://placehold.jp/150x150.png"}/>
                    <h2 className="ProfileName">User Name</h2>
                </div>
                <div className="UserDetails">
                <h3>
                    <ul>
                         <div className="desc" >
                            <li>Description</li>
                        </div>
                        <div className="friends">
                            <li>Friends</li>
                        </div>
                        <div className="lang-sel">
                            <li>Language Selected</li>
                        </div>
                    </ul>
                </h3>
                 </div>
                 <label>
                    <Link to="/UserProfileEdit">Edit Profile</Link>
                </label>  
            </div>   
    </div>
    );
}

export default UserProfile;

