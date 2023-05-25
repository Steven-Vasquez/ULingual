import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams, useLocation } from 'react-router-dom';
import './stylesheets/Forum1.css';

const Forum = () => {
  const [forum, setForum] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const location = useLocation();
  const PostID = location.state.postId;
  const userId = location.state ? location.state.userId : null;

  useEffect(() => {
    axios.get(`https://50.18.108.83.nip.io:3001/forums/${PostID}`)
    // axios.get(`http://localhost:3001/forums/${PostID}`)
      .then(res => {
        console.log(res.data);
        setForum(res.data);
      })
      .catch(error => console.error('Error:', error));
  }, [PostID]);

  const fetchComments = () => {
    axios.get(`https://50.18.108.83.nip.io:3001/forums/${PostID}/comments`)
    // axios.get(`http://localhost:3001/forums/${PostID}/comments`)
    .then(res => {
        console.log(res.data);
        setComments(res.data);
    })
    .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchComments();
  }, [PostID]);

  if (!forum) {
    return <div className='loading'>Loading...</div>;
  }

   const handleCommentSubmit = (e) => {
    e.preventDefault();

    axios.post(`https://50.18.108.83.nip.io:3001/forums/${PostID}/comments`, {
    // axios.post(`http://localhost:3001/forums/${PostID}/comments`, {
      CommentContent: newComment
    })
    .then(res => {
      // Fetch the comments again to display the new comment
      fetchComments();
      // Clear the form
      setNewComment('');
    })
    .catch(error => console.error('Error:', error));
  };

  // Function to handle changes in the form
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="forum-container">
      <div className="forum-header">
        <h1>{forum.Title}</h1>
      </div>

      <div className="forum-main">
      {comments.map((comment, index) => (
        <div className="forum-section" key={index}>
          <div className="forum-comment">
            <span className="comment-button-text">{comment.CommentContent}</span>
          </div>
        </div>
      ))}
      </div>

    <div className="forum-post">
      <div className="inner-post">
        <form onSubmit={handleCommentSubmit}>
          <input type="text" className="post-input-for" value={newComment} onChange={handleCommentChange} placeholder="Add a new comment" style={{ width: '80%', height: '25px', fontSize: '20px' }} />
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