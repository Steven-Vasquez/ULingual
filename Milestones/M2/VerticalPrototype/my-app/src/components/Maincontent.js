import React from 'react'
import './Maincontent.css'

const MainContent = () => {

    const getStarted = () => {
        // some get started thing
      };

    //const languages = {}

    return(
        <div>
            <div className='SubHeader'>
                <h2>Learn languages with real people.</h2>
                <p>Language learning from the comfort of your home.</p>
                <p>Qualified instructors with customizable lessons.</p>
                <p>Conversation practice with native speakers.</p>
                <div className='btn-custom'>
                    <button type='button' onClick={getStarted}>
                    Get Started
                    </button>
                </div>
            </div>

            <div>
                {/* flag/languages offered list 
                
                <ul style={{listStyleType: 'none'}}>
                    {languages.map((member, index) => (
                        member
                    ))}
                </ul>
                */}
                
            </div>

            <div>
                <h3>Why ULingual?</h3>
                <h4>Live lessons with tutors</h4>
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

            
        </div>


    );


}

export default MainContent