import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookImage from './stylesheets/Screenshot 2023-04-27 at 11.36.14 AM.png'
import './stylesheets/Lesson.css'

const Lesson2Page = () => {
    return( 
        <div class = "container">
                <div class="container1">
                    <h1>Lessons</h1>
            </div>
    
            <div class="container2">
                <a href="#" class="button">
                <span class="button__text">In English,  this is called "Books".</span>
                </a>
            </div>
    
            <div class="container3">
                    <div class="innercontainer1">
                    <a href="RecommendationPage" class="button">
                    <img src={BookImage} alt="TVShow Recommendation"></img>
                    </a>
                    </div>
                    <div class="innercontainer2">
                    <a href="RecommendationPage" class="button">
                    <span class="button__text"></span>
                    </a>
                    </div>
            </div>
    
            <div class="container4">
            <a href="#" class="button">
                <span class="button__text">In French, this is called "Livres".</span>
                </a>
            </div>
            <div class="containerE52">
            <a href="LessonComplete" class="button">
                <span class="button__text">Continue</span>
                </a>
           </div>
        </div>
    );
};

export default Lesson2Page;