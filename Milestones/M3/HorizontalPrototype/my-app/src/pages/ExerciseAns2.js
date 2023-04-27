import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const ExerciseAns2 = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }
    return( 
        <div class="containerAns">
            <div class="containerAns1">
                <h2>Select true or false answer.</h2>
            </div>

            <div class="containerAns3">
                <div class="innercontainerAns135">
                <h2>1. What is new in French?</h2>
                </div>
                <div class="innercontainerAns31">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">true</span>
                </a>
                </div>
                <div class="innercontainerAns32">
                <a href="ExerciseAns1" class="button" onClick={toggleNewPage}>
                <span class="button__text">false</span>
                </a>
                </div>
                <div class="innercontainerAns311">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">correct</span>
                </a>
                </div>
                <div class="innercontainerAns322">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect(-1)</span>
                </a>
                </div>
            </div>

            <div class="containerAns4">
                <div class="innercontainerAns42">
                <a href="ExerciseAns1" class="button">
                <span class="button__text">Q1</span>
                </a>
                </div>
                <div class="innercontainerAns243">
                <a href="#" class="button">
                <span class="button__text">Q2</span>
                </a>
                </div>
            </div>
            <div class="containerAns5">
                <div class="innercontainerAns51">
                <a href="ExerciseResults" class="button" onClick={toggleNewPage}>
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseAns2;