import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Lesson.css'

const LessonComplete = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }
    return( 
        <div class="container">
            <div class="containerLF1">
                <h1>Lesson Complete!</h1>
            </div>
            <div class="containerResults5">
                <div class="innercontainerResults51">
                <a href="Exercise1Page" class="button" onClick={toggleNewPage}>
                <span class="button__text">Want to Practice?</span>
                </a>
                </div>
                <div class="innercontainerResults52">
                <a href="Dashboard" class="button" onClick={toggleNewPage}>
                <span class="button__text">Go to HomePage</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default LessonComplete;