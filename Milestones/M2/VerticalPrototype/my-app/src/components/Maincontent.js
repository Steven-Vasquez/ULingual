import React from 'react'
import './Maincontent.css'

function MainContent() {

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
                    {languages.map((blah, index) => (
                        blah
                    ))}
                </ul>
                */}
                
            </div>

            <div>
                {/* blah blah, what we offer
                    1. why us?
                    2. how we work (main tutoring feature)
                    3. how to get started (more detailed)
                    4. What else we offer (inspo from italki beyond the classroom)



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
                <div style={{backgroundColor: 'lightblue'}}> 
                    <div id='ExerptTitle'>
                        <h3>Why ULingual?</h3>
                        <p>Safe and affordable social language learning platform</p>
                    </div>

                    <div className='FlexContainer'>
                        <div className='FlexItem'>
                            <h4>Flexible scheduling</h4>
                            <p>Schedule lessons to match your schedule</p>
                        </div>
                        <div className='FlexItem'>
                            <h4>Professional instructors</h4>
                            <p>Learn from native-level teachers with prior teaching experience</p>
                        </div>
                        <div className='FlexItem'>
                            <h4>More than a tutoring service</h4>
                            <p>blah blah</p>
                        </div>    
                    </div>
                    
                </div>


                <h3>How ULingual works</h3>
                    {/* 
                    1. Live classes 
                    2. Live conversation practice with native speakers
                    3. community interaction & other features

                     */}

                <h3></h3>
                
            </div> 

            
        </div>


    );


}

export default MainContent