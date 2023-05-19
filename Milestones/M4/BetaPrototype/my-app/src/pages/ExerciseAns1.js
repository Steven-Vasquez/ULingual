import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const ExerciseAns1 = () => {
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
                <div class="containerEx1">
                <h2>1. What is "new" in French?</h2>
                </div>
                <div class="innercontainerAns31">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">nouveau</span>
                </a>
                </div>
                <div class="innercontainerAns32">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">vieil</span>
                </a>
                </div>
                <div class="innercontainerAns33">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">avenir</span>
                </a>
                </div>
                <div class="innercontainerEx311">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">correct(+1)</span>
                </a>
                </div>
                <div class="innercontainerEx322">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect</span>
                </a>
                </div>
                <div class="innercontainerEx333">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect</span>
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
                <a href="Exercise2Page" class="button" onClick={toggleNewPage}>
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseAns1;