import React from "react";
import './stylesheets/UserProfile.css'
import { Link } from "react-router-dom";

const FriendsProfile = () => {
    return(
    <div className="user-entire1">
            <div className='UserProfile1'>
                <div className="User-Info1">
                    <img className="ProfileImage1" src ={"https://placehold.jp/150x150.png"}/>
                    <h2 className="ProfileName1">Friends User Name</h2>
                </div>
                <div className="UserDetails1">
                <h3>
                    <ul>
                         <div className="desc1" >
                            <li>Friends Description</li>
                        </div>
                        <div className="friends1">
                            <li>Other Friends</li>
                        </div>
                        <div className="lang-sel1">
                            <li>Friends Language Selection</li>
                        </div>
                    </ul>
                </h3>
                 </div>
                 <label>
                    <Link to="/FriendsListPage">Return</Link>
                </label>  
            </div>   
    </div>
    );
}

export default FriendsProfile;

