import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/Dashboard.css'

const Dashboard = () => {
    return( 
        <div class = "container">
            <div class = "header">
            <h1>Welcome to DASHBOARD!</h1>
            </div>
                <div class = "check">
                <a href="LessonPage" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Lesson</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="Exercise1Page" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Exercise</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="GlobalForumPage" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Global Forums</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="VideoRoomPage" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Video Room</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="RecommendationPage" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Recommendations</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>
        </div>
        </div>
    );
}

export default Dashboard;