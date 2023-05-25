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
                        {messages.map(message => (
                            <ul key={message.MessageID}>
                                <div className="inbox-request">Title: {message.Title} Date Sent:{new Date(message.DateSent).toLocaleTimeString()}, {new Date(message.DateSent).toLocaleDateString()}</div>
                                <div>
                                    {message.Content}
                                </div>
                                <button onClick={(e) => handleAccept(e, message.UserID1, message.Username, message.MessageID)}>Yes</button>
                                <button onClick={(e) => handleReject(e, message.MessageID)}>No</button>
                            </ul>
                        ))}
            </div>
        </div>
        </div>
    );
};

export default InboxPage;