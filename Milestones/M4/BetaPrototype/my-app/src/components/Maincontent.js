import React from 'react'
import './stylesheets/Maincontent.css'
import americanFlag from '../images/americanFlag.png'
import spanishFlag from '../images/spanishFlag.png'
import frenchFlag from '../images/frenchFlag.png'
import arabLeagueFlag from '../images/arabLeagueFlag.png'
import koreanFlag from '../images/koreanFlag.png'
import { Link } from 'react-router-dom'
import LandingPage from '../images/Designer-girl.jpg'
// import { FcGraduationCap, FcPicture,FcReading,FcFilmReel } from "react-icons/fc";
// import { FaUserFriends,FaRegLaughBeam } from "react-icons/fa";
// import { MdVideoCall,MdOutlineForum} from "react-icons/md";
// import { GiTeacher } from "react-icons/gi";
// import { BiMusic } from "react-icons/bi";
// import { ImBooks } from "react-icons/im";



function MainContent() {

    //const languages = {}

    return(
    <div className='maincontender'>
        <div id="banner" className='sec-1'>
            <div className='content-one'> 
                <div className='inter-1'>
                    <h1 className='title-inter-1'>ULingual</h1>
                    <h2 className='title-inter-1'>
                        Learn languages with people globally.</h2>
                        <div className='descript-1'>
                            <p>
                                Connect with native speakers from around the world
                                with a click of a button.
                            </p>
                                <div className='sign-up'>
                                    <Link to="/register">
                                        <label className='sign-up-btn'>
                                            Sign Up Here!</label>
                                    </Link>
                                    <span className='spn'>Get your first two weeks free!</span>
                                </div>
                        </div>
                </div>
            <div className='land-page-image-1'>
                <img src={LandingPage} alt="image of person"></img>
            </div>
            </div>
        </div>
        <div id="info-1" className='sec-2'>
                <div className='content-two'>
                    <h2 className='hp-title'>Join a supportive community</h2>
                    <p>At ULingual we understand learning a language can be difficult,
                        this is why we emphasize creating a supportive community where any one
                        can feel welcome to learn without judgment.
                    </p>
                </div>
        </div>
        <div id="offerings" className='sec-3'>
            <div className='content-three'>
                <h2 className='hp-sec3-title'>ULinguals Dashboard</h2>
                <div className='hp-sec3-info'>
                    <p>Get access to our dashboard that offers
                        lessons, exercises, global forums, video rooms & curated
                        content.
                    </p>
                </div>
                <div className='card-setup'>
                    <article className='hp-card'>
                        <h3 className='hp-card-title'>Lessons</h3> 
                        <p>Access our array of lessons that take you from zero
                            to pro in any of our offerable languages!
                        </p>
                    </article>
                    <article className='hp-card'>
                        <h3 className='hp-card-title'>Exercises</h3>
                        <p>Ready for a test? Access our array of exercises
                            to test your knowledge in the language you're
                            learning.
                        </p>
                        </article>
                    <article className='hp-card'>
                        <h3 className='hp-card-title'>Global Forums</h3>
                        <p>Want to chat globally? Access our global Forums
                            and connect with users from around the world.
                        </p>
                    </article>
                    <article className='hp-card'>
                        <h3 className='hp-card-title'>Video Rooms</h3>
                        <p>Tired of learning and not practice? Access our video
                            rooms and connect with someone to practice with!
                        </p>
                        </article>
                    <article className='hp-card'>
                        <h3 className='hp-card-title'>Curated Content</h3>
                        <p>
                            Access our curated contenting including custom books, tv shows, and
                            music playlist to expand your learning outside of ULingual.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );

}

export default MainContent