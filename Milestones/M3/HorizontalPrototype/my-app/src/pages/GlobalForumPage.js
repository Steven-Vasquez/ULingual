import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/GlobalForumPage.css'

const GlobalForumPage = () => {
    return( 
        <div class = "containergb">
            <div class="containergb2">
                <div class="innercontainergb11">
                <a href="Forum1" class="button">
                <span class="button__text">Name of Forum 1</span>
                </a>
                </div>
                <div class="innercontainergb12">
                <a href="#" class="button">
                <span class="button__text">Number of Participants</span>
                </a>
                </div>
            </div>

            <div class="containergb2">
                <div class="innercontainergb21">
                <a href="Forum1" class="button">
                <span class="button__text">Name of Forum 2</span>
                </a>
                </div>
                <div class="innercontainergb22">
                <a href="#" class="button">
                <span class="button__text">Number of Participants</span>
                </a>
                </div>
            </div>

            <div class="containergb3">
                <div class="innercontainergb31">
                <a href="Forum1" class="button">
                <span class="button__text">Name of Forum 3</span>
                </a>
                </div>
                <div class="innercontainergb32">
                <a href="#" class="button">
                <span class="button__text">Number of Participants</span>
                </a>
                </div>
            </div>

            <div class="containergb4">
                <a href="#" class="button">
                <span class="button__text">Create Forum</span>
                </a>
            </div>
            <div class="containergb4">
                <a href="Dashboard" class="button">
                <span class="button__text">Return</span>
                </a>
            </div>
    </div>
    );
}

export default GlobalForumPage;