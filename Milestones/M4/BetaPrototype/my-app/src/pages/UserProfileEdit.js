import React from "react";
import './stylesheets/UserProfileEdit.css'
import { Link } from "react-router-dom";

const UserProfileEdit = () => {
    return(
    <div className="user-entire">
            <div className='UserProfile'>
                <div className="User-Info">
                    <img className="ProfileImage" src ={"https://placehold.jp/150x150.png"}/>
                    <h4>Edit Photo</h4>
                </div>
                        
                <div className="descriptionContainer">
                    <input type="text" placeholder="Enter New Description" className="editDescription"/>
                </div>
                            
                <div className="user-status">
                    <h4>Change Status</h4> 
                    <div className="online">
                        <h3>Online</h3>
                    </div>
                    <div className="offline">
                        <h3>Offline</h3>
                    </div>
                    <div className="dnd">
                        <h3>Do No Disturb</h3>
                    </div>
                </div>

                <div className="langSelectionBox">
                    <h2>Select Languages</h2>
                    <div className="innerLangSelection">
                        <ul>
                            <li>English <input type={"checkbox"}/></li>
                            <li>Korean <input type={"checkbox"}/></li>
                            <li>Spanish <input type={"checkbox"}/></li>
                            <li>French <input type={"checkbox"}/></li>
                            <li>Arabic <input type={"checkbox"}/></li>
                        </ul>
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