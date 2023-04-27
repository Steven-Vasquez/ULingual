import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/OptionRecommendation.css'
import BookImage from './stylesheets/alex-lvrs-2zDw14yCYqk-unsplash.jpg'
import TVImage from './stylesheets/clement-m-JIOP2qvo8yk-unsplash.jpg'
import VideoImage from './stylesheets/leon-bublitz-uDTzfsGJihw-unsplash.jpg'

const BookRecommendationPage= () => {
    return( 
        <div class = "container">
            <div class="container1">
                <h1>Recommendations</h1>
                <h2>Books!</h2>
        </div>

        <div class="container2">
                <div class="innercontainer1">
                <a href="RecommendationPage" class="button">
                <img src={BookImage} alt="Book Recommendation"></img>
                </a>
                </div>
                <div class="innercontainer2">
                
                <a href="RecommendationPage" class="button">
                <span class="button__text">Link to Book</span>
                </a>
                </div>
        </div>

        <div class="container3">
                <div class="innercontainer1">
                <a href="RecommendationPage" class="button">
                <img src={BookImage} alt="Video Recommendation"></img>
                </a>
                </div>
                <div class="innercontainer2">
                <a href="RecommendationPage" class="button">
                <span class="button__text">Link to Book</span>
                </a>
                </div>
        </div>

        <div class="container4">
                <div class="innercontainer1">
                <a href="RecommendationPage" class="button">
                <img src={BookImage} alt="Book Recommendation"></img>
                </a>
                </div>
                <div class="innercontainer2">
                <a href="RecommendationPage" class="button">
                <span class="button__text">Link to Book</span>
                </a>
                </div>
        </div>
        <a href="RecommendationPage" class="button">
                <span class="button__text">Return</span>
                </a>
    </div>
    );
}

export default BookRecommendationPage;