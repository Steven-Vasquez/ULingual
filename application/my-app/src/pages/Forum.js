import React, { useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import './stylesheets/Forum1.css';

const Forum = () => {
  let { forumId } = useParams();
  
  const [comments, setComments] = useState({
    1: ['Comment 1', 'Comment 2', 'Comment 3'],
    2: ['Comment 4', 'Comment 5', 'Comment 6'],
    3: ['Comment 7', 'Comment 8', 'Comment 9']
  });

  const [newComment, setNewComment] = useState(''); // New state for holding the new comment

  // Function for handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (newComment.trim() !== '') {
      setComments(prevComments => ({
        ...prevComments,
        [forumId]: [...(prevComments[forumId] || []), newComment] // Initialize if it does not exist
      }));
      setNewComment(''); // Clear the input field
    }
  };
  

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h1>Forum Title {forumId}</h1>
      </div>
      {comments[forumId] && comments[forumId].map((comment, index) => (
        <div className="forum-comment" key={index}>
          <div className="inner-comment">
            <a href="#" className="comment-button">
              <span className="comment-button__text">{comment}</span>
            </a>
          </div>
        </div>
      ))}

      {/* Form for adding new comment */}
      <div className="forum-post">
      <div className="inner-post">
      <form onSubmit={handleSubmit}>
        <input type="text" className="post-input-for" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add a new comment" style={{ width: '80%', height: '25px', fontSize: '20px' }} />
        <button type="submit" className="post-button">Submit</button>
      </form>
      </div>
      </div>

      <div className="forum-return">
        <Link to="/GlobalForumPage" className="return-button">
          <span className="return-button__text">Return</span>
        </Link>
      </div>
    </div>
  );
};

export default Forum;