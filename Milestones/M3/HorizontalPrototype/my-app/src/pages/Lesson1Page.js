import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Lesson.css'

const LessonPage = () => {
    return( 
        <div class = "containerL">
                <div class="containerL1">
                    <h1>Lessons</h1>
            </div>
    
            <div class="containerL2">
            <div class="containerL4">
                <div class="innercontainerL42">
                <a href="#" class="button">
                <span class="button__text">"New" In french is</span>
                </a>
                </div>
                <div class="innercontainerL43">
                <a href="Exercise2Page" class="button">
                <span class="button__text">nouveau</span>
                </a>
                </div>
            </div>
            </div>
    
            <div class="containerL2">
            <div class="containerL4">
                <div class="innercontainerL42">
                <a href="#" class="button">
                <span class="button__text">"Bonjour" in French is</span>
                </a>
                </div>
                <div class="innercontainerL43">
                <a href="Exercise2Page" class="button">
                <span class="button__text">Hello</span>
                </a>
                </div>
                </div>
            </div>
            <div class="containerL5">
                <div class="innercontainerEx51">
                <a href="Lesson2Page" class="button">
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;