import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/OptionRecommendation.css'
import BookImage from './stylesheets/alex-lvrs-2zDw14yCYqk-unsplash.jpg'
import MusicImage from './stylesheets/filip-5LhSaUDgtZ8-unsplash.jpg'
import VideoImage from './stylesheets/leon-bublitz-uDTzfsGJihw-unsplash.jpg'

const MusicRecommendationPage= () => {
    return( 
        <div class = "container">
        <div class="container1">
            <h1>Recommendations</h1>
            <h2>Music Playlist!</h2>
    </div>

    <div class="container2">
            <div class="innercontainer1">
            <a href="RecommendationPage" class="button">
            <img src={MusicImage} alt="Video Recommendation"></img>
            </a>
            </div>
            <div class="innercontainer2">
            
            <a href="RecommendationPage" class="button">
            <span class="button__text">Link to Music Playlist</span>
            </a>
            </div>
    </div>

    <div class="container3">
            <div class="innercontainer1">
            <a href="RecommendationPage" class="button">
            <img src={MusicImage} alt="Music Recommendation"></img>
            </a>
            </div>
            <div class="innercontainer2">
            <a href="RecommendationPage" class="button">
            <span class="button__text">Link to Music Playlist</span>
            </a>
            </div>
    </div>

    <div class="container4">
            <div class="innercontainer1">
            <a href="RecommendationPage" class="button">
            <img src={MusicImage} alt="Music Recommendation"></img>
            </a>
            </div>
            <div class="innercontainer2">
            <a href="RecommendationPage" class="button">
            <span class="button__text">Link to Music Playlist</span>
            </a>
            </div>
    </div>
    <a href="RecommendationPage" class="button">
            <span class="button__text">Return</span>
            </a>
</div>
    );
}

export default MusicRecommendationPage;