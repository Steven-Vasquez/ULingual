import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/videoSignUp.css'
//import VideoChat from '../components/video_components/VideoChat';

const VideoRoomPage = () => {

    return(
        <div className='video-sign-up'>
            <header>
                <h1>Video Room Hub</h1>
            </header>
            <div className='video-page'>
                <h2>Select an Option!</h2>
                <div className="video-list">
                    <label className="video-option">
                        <Link to="/Lobby">
                            {   
                                /*
                                    This is a temp link, refer to trello for changes.
                                */
                            }
                            Create Video Room
                        </Link>
                    </label>
                    <br></br>
                    <label className="video-option">
                        <Link to="/Lobby">
                            Join Video Room
                        </Link>
                    </label>
                </div>
                {/*
                <main>
                    <VideoChat />
                </main>
                */}
            </div>
        </div>
    );
    /*
    return( 
        <div className="container-video-room">
            <div className="container-video">
                <h1>Live Video Call</h1>
                <video id="video" playsInline autoPlay>Live Video Call</video>
            </div>
            <div className="container-chat">
                <h1>Chat</h1>
            </div>

            <div className="container-controls">
                <div className="inner-container-controls">
                    <a href="#" className="button-mute">
                        <span className="button-text">Mute Button</span>
                    </a>
                    <a href="#" className="button-video">
                        <span className="button-text">Video On/Off</span>
                    </a>
                    <a href="#" className="button-end-call">
                        <span className="button-text">End Call</span>
                    </a>
                </div>
            </div>

            <div className="container-navigation">
                <div className="inner-container-navigation">
                    <a href="LessonPage" className="button-lesson">
                        <span className="button__text">Lesson</span>
                    </a>
                    <a href="Exercise1Page" className="button-exercise">
                        <span className="button__text">Exercise</span>
                    </a>
                    <a href="Dashboard" className="button-return">
                        <span className="button__text">Return</span>
                    </a>
                </div>
            </div>
        </div>
    );
    */
}

export default VideoRoomPage; 
