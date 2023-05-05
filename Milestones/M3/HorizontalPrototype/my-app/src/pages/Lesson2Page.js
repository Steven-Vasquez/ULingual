import React from 'react';
import { Link } from 'react-router-dom';
import BookImage from './stylesheets/Screenshot 2023-04-27 at 11.36.14 AM.png';
import './stylesheets/Lesson.css';

const Lesson2Page = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>Lessons</h1>
      </div>

      <div className="lesson-card">
        <a href="#" className="lesson-button">
          <span className="lesson-button__text">In English, this is called "Books".</span>
        </a>
      </div>

      <div className="lesson-card">
        <div className="lesson-card-image">
          <a href="RecommendationPage" className="lesson-button">
            <img src={BookImage} alt="TV Show Recommendation" />
          </a>
        </div>
        <div className="lesson-card-text">
          <a href="RecommendationPage" className="lesson-button">
            <span className="lesson-button__text"></span>
          </a>
        </div>
      </div>

      <div className="lesson-card">
        <a href="#" className="lesson-button">
          <span className="lesson-button__text">In French, this is called "Livres".</span>
        </a>
      </div>

      <div className="lesson-footer">
        <a href="LessonComplete" className="lesson-button">
          <span className="lesson-button__text">Continue</span>
        </a>
      </div>
    </div>
  );
};

export default Lesson2Page;
