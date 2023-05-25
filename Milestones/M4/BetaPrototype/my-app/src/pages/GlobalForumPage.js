import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/GlobalForumPage.css';

const GlobalForumPage = () => {
    const [forums, setForums] = useState([
        {
            name: 'Name of Forum 1',
            participants: '3'
        },
        {
            name: 'Name of Forum 2',
            participants: '3'
        },
        {
            name: 'Name of Forum 3',
            participants: '3'
        },
    ]);

    const addForum = () => {
        const forumName = prompt("Enter forum name");
        if (forumName === null || forumName.length === 0) {
            return;
        }
        const forumParticipants = "1";
        setForums([...forums, { name: forumName, participants: forumParticipants }]);
    }

    return( 
        <div className="global-forum-container">
            <div className="global-forum-header">
                <div className="global-forum-section2"> 
                        <div className="global-forum-name2">
                            <h1>Forum Name</h1>
                        </div>
                        <div className="global-forum-participants2">
                            <h2>Participants</h2>
                        </div>
            </div>
            </div>
            <div className="global-forum-main">
            {forums.map((forum, index) => (
                <div className="global-forum-section" key={index}> 
                    <div className="global-forum-name">
                    <Link to={`/forums/${index+1}`} className="global-forum-button">
                        <span className="global-forum-button-text">{forum.name}</span>
                    </Link>
                    </div>
                    <div className="global-forum-participants">
                        <a href="#" className="global-forum-button-participation">
                            <span className="global-forum-button-text">{forum.participants}</span>
                        </a>
                    </div>
                </div>
            ))}
            </div>


            <div className="global-forum-create" onClick={addForum}>
                <a href="#" className="global-forum-button-text-create">
                    <span className="gb">Create Forum</span>
                </a>
            </div>

            <div className="global-forum-return">
                <a href="Dashboard" className="button">
                    <span className="global-forum-button-text-return">Return</span>
                </a>
            </div>
        </div>
    );
}

export default GlobalForumPage;
