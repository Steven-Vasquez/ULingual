import React from 'react'
import './Maincontent.css'
import americanFlag from '../images/americanFlag.png'
import spanishFlag from '../images/spanishFlag.jpeg'
import frenchFlag from '../images/frenchFlag.png'
import arabLeagueFlag from '../images/arabLeagueFlag.png'
import koreanFlag from '../images/koreanFlag.png'




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
                <div className='SubSection1'> 
                    <div className='ExerptTitle'>
                        <h3>Why ULingual?</h3>
                        <p>Safe and affordable social language learning platform</p>
                    </div>

                    <div className='FlexContainer'>
                        <div className='FlexItem'>
                            <h4>Flexible Scheduling</h4>
                            <p>Schedule lessons to match your schedule; anytime, anywhere!</p>
                        </div>
                        <div className='FlexItem'>
                            <h4>Professional Instructors</h4>
                            <p>Learn from native-level teachers with prior teaching experience.</p>
                        </div>
                        <div className='FlexItem'>
                            <h4>Native Speakers</h4>
                            <p>Connect with native speakers who are people like you who want to exchange language!</p>
                        </div>    
                    </div>
                </div>
            
            <div className='SubSection2'>
                <h3>How ULingual Works?</h3>
                    <h4>Select a language</h4>
                    <ul className='LangBar'>
                        <li className='Lang-Item'>English</li>
                        <li className='Lang-Item'>Spanish</li>
                        <li className='Lang-Item'>French</li>
                        <li className='Lang-Item'>Arabic</li>
                        <li className='Lang-Item'>Korean</li>
                    </ul>
                    <ul className='LangBar'>
                        <li className='Lang-Item'><img src={americanFlag} alt='AmericanFlag'/></li>
                        <li className='Lang-Item'><img src={spanishFlag} alt='SpanishFlag'/></li>
                        <li className='Lang-Item'><img src={frenchFlag} alt='FrenchFlag'/></li>
                        <li className='Lang-Item'><img src={arabLeagueFlag} alt='ArabLeagueFlag'/></li>
                        <li className='Lang-Item'><img src={koreanFlag} alt='KoreanFlag'/></li>
                    </ul>

                    <h4>View ULinguals Interative Courses for your desired language</h4>
                    <p className='courseDesc'>Browse ULinguals Courses that range from quizes, to readings, to picture identifiying & more!</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>Connect with a Native Speaker via Video Connection!</h4>
                    <p>Connect with other users around the world and learn from their mother tongue!</p>
                    <p>Chat on call, make friends, laugh, and learn!</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>Find a Tutor and book a Private Appointment!</h4>
                    <p>ULingual offers users a catelog of trained Tutors who
                        will teach users a language. These trained Tutors have
                        free reign on the way they teach their students. Making the
                        experience personal and unique.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>Browse forums and see what users are talking about!</h4>
                    <p>ULingual has a forums section where users can chat 
                        share stories, and leave recommendations on learning
                        strategies.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h4>View ULingual's curated content towards your desired language</h4>
                    <ul className='LangBar'>
                        <li className='Lang-Item'>Music Playlists</li>
                        <li className='Lang-Item'>Movies & Show Recommendations</li>
                        <li className='Lang-Item'>Book Recommendations</li>
                    </ul>
             </div> 

                    {/* 
                    1. Live classes 
                    2. Live conversation practice with native speakers
                    3. community interaction & other features

                     */}
                
        </div>


    );


}

export default MainContent