import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Inbox.css'
import axios from 'axios';

const InboxPage = () => {
    const [messages, setMessages] = useState([]);

    const getMessages = () => {
        axios.post("https://50.18.108.83.nip.io:3001/inbox/messages")
        // axios.post("http://localhost:3001/inbox/messages")
        .then(res => {
            if(res.data) {
                setMessages(res.data);
                console.log(res.data);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }

    const handleAccept = (e, FriendID, username, MessageID) => {
        e.preventDefault();
        axios.post("https://50.18.108.83.nip.io:3001/friend/add", {
        // axios.post("http://localhost:3001/friend/add", {
            UserID: FriendID,
            username: username
        })
        .then(res => {
            if(res.data.message) {
                alert(res.data.message);
            }
        })
        .catch(err => {
            console.error(err);
        })
        axios.post("https://50.18.108.83.nip.io:3001/inbox/delete", {
        // axios.post("http://localhost:3001/inbox/delete", {
            MessageID: MessageID
        })
        .then(res => {
            if(res.data.message) {
                console.log(res.data.message);
            }
            getMessages();
        })
        .catch(err => {
            console.error(err);
        })
    }

    const handleReject = (e, MessageID) => {
        e.preventDefault();
        axios.post("https://50.18.108.83.nip.io:3001/inbox/delete", {
        // axios.post("http://localhost:3001/inbox/delete", {
            MessageID: MessageID
        })
        .then(res => {
            if(res.data.message) {
                console.log(res.data.message);
            }
            getMessages();
        })
        .catch(err => {
            console.error(err);
        })
    }

    useEffect(() => {
        getMessages();
    },[]);

    return( 
        <div className='inboxPG'>
        <div className = "InboxContainer">
            <div className="inboxHeader">
                <h1>Inbox</h1>
            </div>

            <div className="innerInbox">
                <div className="leftInbox">
                    <div className="button">
                        <Link to="/InboxPage" className="purplebox">Message</Link>
                    </div>
                    <div className="friendsInbox">
                        <h3>Friend 1</h3>
                        <h3>Friend 2</h3>
                        <h3>Friend 3</h3>
                        <h3>Friend 4</h3>
                        <h3>Friend 5</h3>
                        <h3>Friend 6</h3>
                        <h3>Friend 7</h3>
                        <h3>Friend 8</h3>
                        <h3>Friend 9</h3>
                        <h3>Friend 10</h3>
                        <h3>Friend 11</h3>
                        <h3>Friend 12</h3>
                        <h3>Friend 13</h3>
                        <h3>Friend 14</h3>
                    </div>
                </div>

                <div className="rightInbox">
                    <div className="userDetailInbox">
                    
                    </div>
                    <div className="contentInbox">
                        {messages.map(message => (
                            <ul key={message.MessageID}>
                                <div>Title: {message.Title} Date Sent:{new Date(message.DateSent).toLocaleTimeString()}, {new Date(message.DateSent).toLocaleDateString()}</div>
                                <div>
                                    {message.Content}
                                </div>
                                <button onClick={(e) => handleAccept(e, message.UserID1, message.Username, message.MessageID)}>Yes</button>
                                <button onClick={(e) => handleReject(e, message.MessageID)}>No</button>
                            </ul>
                        ))}
                    </div>
                    <div className="typeMessage">
                        <input type="text" className="inboxInputText" placeholder="Something to say?!..." style={{ fontSize: '20px' }} />
                        <button className="submitButtonText">Post</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InboxPage;