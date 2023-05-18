import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/Forum1.css'

const Forum1 = () => {
    return( 
        <div className="forum-container">
            <div className="forum-header">
                <h1>Forum Title</h1>
            </div>
            <div className="forum-comment">
                <div className="inner-comment">
                    <a href="#" className="comment-button">
                        <span className="comment-button__text">The Comment Posted</span>
                    </a>
                </div>
            </div>

            <div className="forum-comment">
                <div className="inner-comment">
                    <a href="#" className="comment-button">
                        <span className="comment-button__text">The Comment Posted</span>
                    </a>
                </div>
            </div>

            <div className="forum-comment">
                <div className="inner-comment">
                    <a href="#" className="comment-button">
                        <span className="comment-button__text">The Comment Posted</span>
                    </a>
                </div>
            </div>

            <div className="forum-post">
                <div className="inner-post">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" className="post-input-for" placeholder="Something to say?!..." style={{ width: '8000000000000000000000000%', height: '25px', fontSize: '20px' }} />
                    <a href="#" className="post-button">
                        <span className="post-button__text">Post</span>
                    </a>
                    </div>
                </div>
            </div>

            <div className="forum-return">
                <a href="GlobalForumPage" className="return-button">
                    <span className="return-button__text">Return</span>
                </a>
            </div>
        </div>
    );
}

export default Forum1;
