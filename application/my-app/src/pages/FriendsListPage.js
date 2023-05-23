import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './stylesheets/Friends.css'
import axios from 'axios'

const FriendsList = () => {

    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();

    const navigateFriendsPage = (e, username) => {
        e.preventDefault();
        navigate(`/FriendsProfile?user=${username}`);
    }

    useEffect(() => {
        axios.post("https://50.18.108.83.nip.io:3001/friends")
        // axios.post("http://localhost:3001/friends")
        .then(res => {
            if(res.data.message) {
                alert(res.data.message);
            } else {
                setFriends(res.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return( 
        <div class = "containerfrl">
            {friends.map(user => (
                <div key={user.UserID} class="containerfrl2">
                    <div class="innercontainerfrl11">
                        <a onClick={(e) => navigateFriendsPage(e, user.Uusername)} class="button">
                            <img class="button__text" src={user.Image ? "https://50.18.108.83.nip.io:3001/"+user.Image : "https://placehold.jp/150x150.png"}/>
                            {/* <img class="button__text" src={user.Image ? "http://localhost:3001/"+user.Image : "https://placehold.jp/150x150.png"}/> */}
                        </a>
                    </div>
                    <div class="innercontainerfrl12">
                        <a onClick={(e) => navigateFriendsPage(e, user.Uusername)} class="button">
                            <span class="button__text">{user.Uusername}</span>
                        </a>
                    </div>
                </div>
            ))}
            {/* <div class="containerfrl2">
                <div class="innercontainerfrl21">
                <a href="FriendsProfile" class="button">
                <span class="button__text">Friend 2</span>
                </a>
                </div>
                <div class="innercontainerfrl22">
                <a href="FriendsProfile" class="button">
                <span class="button__text">Friend 2 Details</span>
                </a>
                </div>
            </div>

            <div class="containerfrl2">
                <div class="innercontainerfrl31">
                <a href="FriendsProfile" class="button">
                <span class="button__text">Friend 3</span>
                </a>
                </div>
                <div class="innercontainerfrl32">
                <a href="FriendsProfile" class="button">
                <span class="button__text">Friend 3 Details</span>
                </a>
                </div>
            </div> */}
            <div class="containerfrl4">
                <a href="Dashboard" class="button">
                    <span class="button__text">Return</span>
                </a>
            </div>
        </div>
    );
}

export default FriendsList;