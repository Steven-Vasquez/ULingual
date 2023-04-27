import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const Exercise1Page = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }

    return( 
        <div class="containerEx">
            <div class="containerEx1">
                <h2>Select the correct answer.</h2>
            </div>

            <div class="containerEx3">
                <div class="innercontainerEx35">
                <h2>1. What is new in French?</h2>
                </div>
                <div class="innercontainerEx31">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">nouveau</span>
                </a>
                </div>
                <div class="innercontainerE32">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">vieil</span>
                </a>
                </div>
                <div class="innercontainerE33">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">avenir</span>
                </a>
                </div>
            </div>

            <div class="containerEx4">
                <div class="innercontainerEx42">
                <a href="#" class="button">
                <span class="button__text">Q1</span>
                </a>
                </div>
                <div class="innercontainerEx43">
                <a href="Exercise2Page" class="button">
                <span class="button__text">Q2</span>
                </a>
                </div>
            </div>
            <div class="containerEx5">
                <div class="innercontainerEx51">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Exercise1Page;