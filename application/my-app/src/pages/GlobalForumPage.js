import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import './stylesheets/GlobalForumPage.css';

const GlobalForumPage = () => {
    const [forums, setForums] = useState([]);
    const navigate = useNavigate();

    const fetchForums = () => {
         axios.get('https://50.18.108.83.nip.io:3001/forums') 
        //axios.get('http://localhost:3001/forums')
            .then(res => {
                console.log(res.data);
                setForums(res.data);
            })
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        fetchForums();
    }, []);

    const addForum = () => {
        const forumName = prompt("Enter forum name");
        if (forumName === null || forumName.length === 0) {
            return;
        }

        // Post the new forum to the server
        axios.post('https://50.18.108.83.nip.io:3001/addForum', {
        //axios.post('http://localhost:3001/addForum', {    
            Title: forumName
        })
        .then(res => {
            console.log(res.data);
            fetchForums();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const goToForum = (postId, userId) => {
        navigate(`/forums/${postId}`, { state: { postId} });
    };
      
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
                    <button onClick={() => goToForum(forum.PostID)} className="global-forum-button">
                        <span className="global-forum-button-text">{forum.Title}</span>
                    </button>
                        <p>Date Created: {new Date(forum.DateCreated).toLocaleTimeString()}, {new Date(forum.DateCreated).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="global-forum-participants">
                        <a href="#" className="global-forum-button-participation">
                            <span className="global-forum-button-text">Total Comments: {forum.Comments}</span>
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
                <a href="Dashboard" className="global-forum-button">
                    <span className="global-forum-button-text-return">Return</span>
                </a>
            </div>
        </div>
    );
}

export default GlobalForumPage;

