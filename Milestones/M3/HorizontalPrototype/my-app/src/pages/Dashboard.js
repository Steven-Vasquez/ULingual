import React from 'react'
import { Link } from 'react-router-dom';
import './StyleSheets/Dashboard.css'

const Dashboard = () => {
    return( 
        <div class = "container">
            <div class = "header">
            <h1>Welcome to your own personal Dashboard!</h1>
            </div>
                <div class = "check">
                <a href="#" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Lesson</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="#" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Exercise</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="#" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Global Forums</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="#" class="button">
                <div class="button__line"></div>
                <div class="button__line"></div>
                <span class="button__text">Video Room</span>
                <div class="button__drow1"></div>
                <div class="button__drow2"></div>
                </a>

                <a href="#" class="button">
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