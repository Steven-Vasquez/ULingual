import React from "react";
import './stylesheets/UserProfile.css'
import Banner from './stylesheets/UlingualBanner.png'
import { Link } from "react-router-dom";

const UserProfile = () => {
    return(
    <div className="userHeader">
        <header>
            <img src={Banner} alt="Ulingual Banner"></img>
        </header>
        <div className="userContainer">
            <div className="leftUser">
                <img className="ProfileImages1" src ={"https://placehold.jp/150x150.png"}/>
                <h2 className="ProfileNames1">UserName</h2>
                <div className="button">
                    <Link to="/FriendsListPage" className="purplebox">Inbox</Link>
                </div>

                <div className="button">
                    <Link to="/UserProfileEdit" className="purplebox">Edit Profile</Link>
                </div>
                <div className="userData">
                    <li>Email</li>
                    <li>Followers</li>
                    <li>Native Language</li>
                </div>
            </div>

            <div className="rightUser">
                <div className="descriptionBox" >
                    <h3>Description</h3>
                </div>
                <div className="friendsBox">
                    <Link to="/FriendsListPage" className="button">
                    <h3>Friends</h3>
                    </Link>
                </div>
                
                <div className="languageBox">
                    <Link to="/SelectLanguage" className="button">
                    <h3>Language Selected</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserProfile;
