import React from 'react'
import { Link } from 'react-router-dom';
import './StyleSheets/Forum1.css'

const Forum1 = () => {
    return( 
        <div class = "containerf">
            <div class="container1">
                <h1>Forum Title</h1>
            </div>
            <div class="containerf1">
                <div class="innercontainerf1">
                <a href="#" class="button">
                <span class="button__text">The Comment Posted</span>
                </a>
                </div>
            </div>

            <div class="containerf1">
                <div class="innercontainerf1">
                <a href="#" class="button">
                <span class="button__text">The Comment Posted</span>
                </a>
                </div>
            </div>

            <div class="containerf1">
                <div class="innercontainerf1">
                <a href="#" class="button">
                <span class="button__text">The Comment Posted</span>
                </a>
                </div>
            </div>

            <div class="containerf2">
                <div class="innercontainerf31">
                <a href="#" class="button">
                <span class="button__text">
                <input type="text" placeholder="Something to say?!..." style={{ width: '50%', height: '25', fontSize: '20px' }}/>
                </span>
                </a>
                </div>
                <div class="innercontainerf32">
                <a href="#" class="button">
                <span class="button__text">Post</span>
                </a>
                </div>
            </div>
            <div class="containerf4">
                <a href="GlobalForumPage" class="button">
                <span class="button__text">Return</span>
                </a>
            </div>
    </div>
    );
}

export default Forum1;