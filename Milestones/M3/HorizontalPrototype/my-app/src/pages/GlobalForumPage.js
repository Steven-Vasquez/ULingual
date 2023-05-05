import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/GlobalForumPage.css'

const GlobalForumPage = () => {
    return( 
        <div className="global-forum-container">
            <div className="global-forum-section"> 
                <div className="global-forum-name">
                    <a href="Forum1" className="global-forum-button">
                        <span className="global-forum-button-text">Name of Forum 1</span>
                    </a>
                </div>
                <div className="global-forum-participants">
                    <a href="#" className="global-forum-button">
                        <span className="global-forum-button-text">Number of Participants</span>
                    </a>
                </div>
            </div>

            <div className="global-forum-section">
                <div className="global-forum-name">
                    <a href="Forum1" className="global-forum-button">
                        <span className="global-forum-button-text">Name of Forum 2</span>
                    </a>
                </div>
                <div className="global-forum-participants">
                    <a href="#" className="global-forum-button">
                        <span className="global-forum-button-text">Number of Participants</span>
                    </a>
                </div>
            </div>

            <div className="global-forum-section">
                <div className="global-forum-name">
                    <a href="Forum1" className="global-forum-button">
                        <span className="global-forum-button-text">Name of Forum 3</span>
                    </a>
                </div>
                <div className="global-forum-participants">
                    <a href="#" className="global-forum-button">
                        <span className="global-forum-button-text">Number of Participants</span>
                    </a>
                </div>
            </div>

            <div className="global-forum-create">
                <a href="#" className="global-forum-button-text-create">
                    <span className="gb">Create Forum</span>
                </a>
            </div>
            <div className="global-forum-return">
                <a href="Dashboard" className="global-forum-button">
                    <span className="global-forum-button-text-return">Return</span>
                </a>
            </div>
        </div>
    );
}

export default GlobalForumPage;
