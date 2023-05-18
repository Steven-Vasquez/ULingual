import React, {useEffect, useState} from "react";
import './stylesheets/UserProfile.css'
import Banner from './stylesheets/UlingualBanner.png'
import { Link } from "react-router-dom";
import axios from 'axios'

const UserProfile = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [nativeLanguage, setNative] = useState();
    const [learningLanguage, setLearning] = useState();
    const [description, setDescription] = useState();
    const [followers, setFollowers] = useState();

    useEffect(() => {
        //axios.post(`https://50.18.108.83.nip.io:3001/user/info`)
        axios.post(`http://localhost:3001/user/info`)
        .then(res => {
            setUsername(res.data.Uusername);
            setEmail(res.data.Uemail);
            setDescription(res.data.Description);
            setNative(res.data.NativeLanguage);
            setLearning(res.data.LearningLanguage);
        })
        .catch(err => {
            console.log(err);
        });
        //axios.post(`https://50.18.108.83.nip.io:3001/friends/count`)
        axios.post(`http://localhost:3001/friends/count`)
        .then(res => {
            setFollowers(res.data.count);
        })
        .catch(err => {
            console.log(err);
        });

    },[]);

    return(
    <div className="userHeader">
        <header>
            <img src={Banner} alt="Ulingual Banner"></img>
        </header>
        <div className="userContainer">
            <div className="leftUser">
                <img className="ProfileImages1" src ={"https://placehold.jp/150x150.png"}/>
                <h2 className="ProfileNames1">{username}</h2>
                <div className="button">
                    <Link to="/InboxPage" className="purplebox">Inbox</Link>
                </div>

                <div className="button">
                    <Link to="/UserProfileEdit" className="purplebox">Edit Profile</Link>
                </div>
                <div className="userData">
                    <li>Email: {email}</li>
                    <li>Followers: {followers}</li>
                    <li>Native Language: {nativeLanguage}</li>
                </div>
            </div>

            <div className="rightUser">
                <div className="descriptionBox" >
                    <h3>{description}</h3>
                </div>
                <div className="friendsBox">
                    <Link to="/FriendsListPage" className="button">
                    <h3>Friends</h3>
                    </Link>
                </div>
                
                <div className="languageBox">
                    <Link to="/SelectLanguage" className="button">
                    <h3>Language Selected: {learningLanguage}</h3>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserProfile;
