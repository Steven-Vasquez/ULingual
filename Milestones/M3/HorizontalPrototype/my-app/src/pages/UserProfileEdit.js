import React from "react";
import './stylesheets/UserProfileEdit.css'
import { Link } from "react-router-dom";

const UserProfileEdit = () => {
    return(
    <div className="user-entire">
            <div className='UserProfile'>
                <div className="User-Info">
                    <img className="ProfileImage" src ={"https://placehold.jp/150x150.png"}/>
                    <h2 className="ProfileName">Change Picture</h2>
                </div>
                <div className="UserDetails">
                         <br></br>
                         <br></br>
                        <h3>Change Description:</h3>
                        <h4>Status</h4> 
                            <ul className="user-status">
                                <div className="online">
                                    <li>Online</li>
                                </div>
                                <div className="offline">
                                    <li>Offline</li>
                                </div>
                                <div className="dnd">
                                    <li>Do No Disturb</li>
                                </div>
                            </ul>
                 </div>
                 <label>
                    <Link to="/UserProfile">Done Editing</Link>
                </label>
            </div>   
    </div>
    );
}

export default UserProfileEdit;