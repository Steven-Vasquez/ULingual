import React from "react";
import './stylesheets/FriendsDetailPage.css'
import Banner from './stylesheets/UlingualBanner.png'
import { Link } from "react-router-dom";

const FriendsProfile = () => {
    return(
        <div className="friendsHeader">
        <header>
            <img src={Banner} alt="Ulingual Banner"></img>
        </header>
        <div className="friendsContainer">
            <div className="leftfriends">
                <img className="ProfileImages1" src ={"https://placehold.jp/150x150.png"}/>
                <h2 className="ProfileNames1">Friends Name</h2>
                <div className="friendsData">
                    <li>Email</li>
                    <li>Followers</li>
                    <li>Native Language</li>
                </div>
                <div className="button">
                    <Link to="/FriendsListPage" className="bluebox">Follow</Link>
                </div>
                <div className="button">
                    <Link to="/FriendsListPage" className="bluebox">Return</Link>
                </div>
            </div>

            <div className="rightfriends">
                <div className="descriptionPacket" >
                    <h3>Description</h3>
                </div>
                <div className="friendsPacket">
                    <Link to="#" className="button">
                    <h3>Friends</h3>
                    </Link>
                </div>
                
                <div className="languagePacket">
                    <Link to="#" className="button">
                    <h3>Language Selected</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default FriendsProfile;

