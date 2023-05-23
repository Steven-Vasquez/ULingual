import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Inbox.css'

const InboxPage = () => {
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