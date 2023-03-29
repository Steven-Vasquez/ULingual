import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  const getStarted = () => {
    // some get started thing
  };

  return (
    <>
      {/* OVERALL LAYOUT 
      * [X] nav/burger bar
      * [-] (basic about)
      * [-] (start trial/get started)
      * [ ] (Languages offered)- with flags
      * 
      * scroll down ->
      * [-] why us vs others? what we offer
      * [-] (website footer)
      */}

      <Navbar />
      <div>
        <h2>Learn languages with real people</h2>
        <p>some further info or whatever</p>
        <button type='button' onClick={getStarted}>
          Get Started
        </button>
      </div>

      <div>
        {/* flag/languages offered list */}
      </div>

      <div>
        <h3>Why ULingual?</h3>
        {/* blah blah, what we offer 
        *  (image)
        *  - Live lessons with tutors
        *     -
        * 
        *  (image)
        *  - Live chat with native speakers & fellow learners for practice
        * 
        *  - Other language learning resources
        * 
        * What else do we offer? 
        * [Learn more about ULingual] 
        */}
      </div>
      
      <Footer />

      
      

      
    </>

  );
}

export default App;
