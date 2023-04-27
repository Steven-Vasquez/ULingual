import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const ExerciseResults = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }
    return( 
        <div class="container">
            <div class="container1">
                <h1>Congratulations!</h1>
                <h2>Progress Report: 1/2</h2>
            </div>
            <div class="containerAns4">
                <div class="innercontainerAns42">
                <a href="#" class="button">
                <span class="button__text">Q1</span>
                </a>
                </div>
                <div class="innercontainerAns243">
                <a href="#" class="button">
                <span class="button__text">Q2</span>
                </a>
                </div>
            </div>
            <div class="containerResults5">
                <div class="innercontainerResults51">
                <a href="RecommendationPage" class="button" onClick={toggleNewPage}>
                <span class="button__text">Go to Recommendation</span>
                </a>
                </div>
                <div class="innercontainerResults52">
                <a href="Dashboard" class="button" onClick={toggleNewPage}>
                <span class="button__text">Return to Home Page</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseResults;