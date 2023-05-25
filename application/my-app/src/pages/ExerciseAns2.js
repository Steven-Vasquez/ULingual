import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/ExercisePage.css'

const ExerciseAns2 = () => {
    const [showNewPage, setShowNewPage] = useState(false);

    const toggleNewPage = () => {
      setShowNewPage(!showNewPage);
    }
    return( 
        <div class="containerEx">
            <div class="containerEx1">
                <h2>Select true or false.</h2>
            </div>

            <div class="containerEx3">
                <div class="containerEx1">
                <h2>2. Does 'Bonjour' mean hello in French?</h2>
                </div>
                <div class="innercontainerAns31">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">true</span>
                </a>
                </div>
                <div class="innercontainerAns32">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">false</span>
                </a>
                </div>
                <div class="innercontainerAns311">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">correct</span>
                </a>
                </div>
                <div class="innercontainerEx322">
                <a href="#" class="button" onClick={toggleNewPage}>
                <span class="button__text">incorrect(-1)</span>
                </a>
                </div>
            </div>

            <div class="containerEx4">
                <div class="innercontainerEx42">
                <a href="ExerciseAns1" class="button">
                <span class="button__text">Q1</span>
                </a>
                </div>
                <div class="innercontainerEx43">
                <a href="#" class="button">
                <span class="button__text">Q2</span>
                </a>
                </div>
            </div>
            <div class="containerEx5">
                <div class="innercontainerEx51">
                <a href="ExerciseResults" class="button" onClick={toggleNewPage}>
                <span class="button__text">Continue</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseAns2;