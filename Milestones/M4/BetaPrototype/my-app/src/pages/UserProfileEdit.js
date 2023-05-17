import React from "react";
import './stylesheets/UserProfileEdit.css'
import { Link } from "react-router-dom";

const UserProfileEdit = () => {
    return(
    <div className="user-entire">
            <div className='UserProfile'>
                <div className="User-Info">
                    <img className="ProfileImage" src ={"https://placehold.jp/150x150.png"}/>
                </div>
                        
                <div className="descriptionContainer">
                    <input type="text" placeholder="Enter New Description"/>
                </div>
                            
                <div className="user-status">
                    <h4>Status</h4> 
                    <div className="online">
                        <li>Online</li>
                    </div>
                    <div className="offline">
                        <li>Offline</li>
                    </div>
                    <div className="dnd">
                        <li>Do No Disturb</li>
                    </div>
                </div>
                
                <div className="button">
                    <Link to="/UserProfile" className="greenbox">Done</Link>
                </div>
            </div>   
    </div>
    );
}

export default UserProfileEdit;