import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const ExerciseAns1 = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }
    return( 
        <div class="containerAns">
            <div class="containerAns1">
                <h2>Select the correct answer.</h2>
            </div>

            <div class="containerAns3">
                <div class="innercontainerAns135">
                <h2>1. What is new in French?</h2>
                </div>
                <div class="innercontainerAns31">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">nouveau</span>
                </a>
                </div>
                <div class="innercontainerAns32">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">vieil</span>
                </a>
                </div>
                <div class="innercontainerAns33">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">avenir</span>
                </a>
                </div>
                <div class="innercontainerAns311">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">correct(+1)</span>
                </a>
                </div>
                <div class="innercontainerAns322">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect</span>
                </a>
                </div>
                <div class="innercontainerAns333">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect</span>
                </a>
                </div>
            </div>

            <div class="containerAns4">
                <div class="innercontainerAns42">
                <a href="#" class="button">
                <span class="button__text">Q1</span>
                </a>
                </div>
                <div class="innercontainerAns43">
                <a href="Exercise2Page" class="button">
                <span class="button__text">Q2</span>
                </a>
                </div>
            </div>
            <div class="containerAns5">
                <div class="innercontainerAns51">
                <a href="Exercise2Page" class="button" onClick={toggleNewPage}>
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseAns1;