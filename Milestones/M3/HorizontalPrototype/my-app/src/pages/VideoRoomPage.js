import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/VideoRoom.css'

const VideoRoomPage = () => {
    return( 
        <div class = "containervr">
            <div class="containervr1">
            <h1>Live Video Call</h1>
            <video id="video" playsinline autoplay>Live Video Call</video>
            </div>

            <div class="containervr2">
                <h1>Chat</h1>
            </div>

            <div class="containervr3">
            <div class="innercontainervr3">
                <a href="#" class="button">
                <span class="button__text">Mute Button</span>
                </a>

                <a href="#" class="button">
                <span class="button__text">Video On/Off</span>
                </a>

                <a href="#" class="button">
                <span class="button__text">End Call</span>
                </a>
                </div>
            </div>

            <div class="containervr4">
            <div class="innercontainervr4">
                <a href="LessonPage" class="button">
                <span class="button__text">Lesson</span>
                </a>

                <a href="ExercisePage" class="button">
                <span class="button__text">Exercise</span>
                </a>

                <a href="Dashboard" class="button">
                <span class="button__text">Return</span>
                </a>
                </div>
            </div>
    </div>
    );
}

export default VideoRoomPage;