import React from 'react'
import './stylesheets/Maincontent.css'
import americanFlag from '../images/americanFlag.png'
import spanishFlag from '../images/spanishFlag.png'
import frenchFlag from '../images/frenchFlag.png'
import arabLeagueFlag from '../images/arabLeagueFlag.png'
import koreanFlag from '../images/koreanFlag.png'
import { Link } from 'react-router-dom'
// import { FcGraduationCap, FcPicture,FcReading,FcFilmReel } from "react-icons/fc";
// import { FaUserFriends,FaRegLaughBeam } from "react-icons/fa";
// import { MdVideoCall,MdOutlineForum} from "react-icons/md";
// import { GiTeacher } from "react-icons/gi";
// import { BiMusic } from "react-icons/bi";
// import { ImBooks } from "react-icons/im";



function MainContent() {

    //const languages = {}

    return(
        <div>
            <div className='SubHeader'>
                <h2>Learn languages with real people.</h2>
                <p>Language learning from the comfort of your home.</p>
                <p>Qualified instructors with customizable lessons.</p>
                <p>Conversation practice with native speakers.</p>
                <div className='btn-custom'>
                    <Link to='/login'>
                        <button type='button'>
                        Get Started
                        </button>  
                    </Link>
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
                * What else do we offer? 
                * [Learn more about ULingual] 
                */}
                <div className='SubSection1'> 
                    <div className='ExerptTitle'>
                        <h3>Why ULingual?</h3>
                        <p>Safe and affordable social language learning platform.</p>
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
                    <div className='LangBar'>
                            <div className='flag1'>
                                    <img src={americanFlag} alt='AmericanFlag'/>
                            </div>
                            <div className='flag2'>
                                <img src={spanishFlag} alt='SpanishFlag'/>
                            </div>
                            <div className='flag3'>
                                <img src={frenchFlag} alt='FrenchFlag'/>
                            </div>
                            <div className='flag4'>
                                <img src={arabLeagueFlag} alt='ArabLeagueFlag'/>
                            </div>
                            <div className='flag5'>
                                <img src={koreanFlag} alt='KoreanFlag'/>
                            </div>
                    </div>

            </div>
            <div className='SubSection3'>
                    <h4>ULinguals Interactive Courses</h4>
                    <p className='courseDesc'>Browse ULinguals Courses where you can take your learning experience to the next level!</p>
                    <p className='courseDesc'>We offer custom quizes, curated readings, and photo identifying tests in your desired language.</p>
                    <ul className='sub-section3-content'>
                        {/* <li className='sub-section3-content'>Quizes <FcGraduationCap size={80}/></li> */}
                        {/* <li className='sub-section3-content'>Readings <FcReading  size={80}/></li> */}
                        {/* <li className='sub-section3-content'>Photos <FcPicture size={80}/></li> */}
                    </ul>
            </div>
                    <br></br>
                    <br></br>
                    <br></br>
            <div className='SubSection4'>
                    <h4>Connect with a Native Speaker</h4>
                    <p>Connect with other users around the world and learn from their mother tongue!</p>
                    <p>Chat on video call, make friends, laugh, and learn!</p>
                    <ul className='sub-section4-content'>
                        {/* <li className='sub-section4-content'>Video Calls <MdVideoCall size={60}/></li> */}
                        {/* <li className='sub-section4-content'>Make Friends <FaUserFriends size={60}/></li> */}
                        {/* <li className='sub-section4-content'>Laugh & Learn <FaRegLaughBeam size={60}/></li> */}
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
            <div className='SubSection5'>
                    <h4>Tutors & Private Appointments</h4>
                    <p>ULingual offers users a catelog of trained Tutors who
                        will teach users a language.
                    </p>
                        <p>Tutors have
                        free reign on how they teach their students. Making the
                        experience personal and unique.
                    </p>

                    <ul className='sub-section5-content'>
                        {/* <li className='sub-section5-content'>Tutoring  <GiTeacher size={50}/></li> */}
                    </ul>
            </div>
                    <br></br>
                    <br></br>
            <div className='SubSection6'>
                    <h4>Browse Forums</h4>
                    <p>ULingual offers forums where users can chat 
                        share stories, and leave recommendations on learning
                        strategies.
                    </p>
                    <ul className='sub-section6-content'>
                        {/* <li className='sub-section6-content'>Forums  <MdOutlineForum size={50}/></li> */}
                    </ul>
            </div>
                    <br></br>
                    <br></br>
            <div className='SubSection7'>
                    <h4>Curated Content for you</h4>
                    <p>At ULingual, we believe learning should be a constant flow, 
                        this is why we offer curated content for you to explore outside
                        of ULingual.</p>
                    <ul className='sub-section7-content'>
                        {/* <li className='sub-section7-content'>Music Playlists <BiMusic size={60}/></li> */}
                        {/* <li className='sub-section7-content'>Movies & Shows<FcFilmReel size={60}/></li> */}
                        {/* <li className='sub-section7-content'>Book Recs<ImBooks size={60}/></li> */}
                    </ul>
            </div>
            <br></br>
            <br></br>
        </div> 

    );


}

export default MainContent