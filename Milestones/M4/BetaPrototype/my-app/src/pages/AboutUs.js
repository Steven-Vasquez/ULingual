import React from "react";
import './stylesheets/AboutUs.css';


const AboutUs = () => {
    return (
  <div className="ab-pg">
        <div className="ab">
                <h1>About Us: Our Mission</h1>

            <div className="ab-sec">
                    <button className="ab-drop">
                     What is ULingual?
                    </button>
                <div className="ab-context">
                    <p>ULingual is a language exchange platform that connects native speaker with non-native speakers of a given language.
                    Users at ULingual can learn and practice speaking a language with each other over a video streaming connection 
                    to experience a more personal and intriguing learning experience.
                    </p> 
                </div>
            </div>
            <div className="ab-sec">
                    <button className="ab-drop">
                    Our Emphasis on Listening!
                    </button>
                
                <div className="ab-context">
                    <p>
                        ULingual understands that learning language can be difficult.
                        Practicing by speaking is an important component of learning. 
                        At ULingual we also believe in practice by hearing, getting adjusted to a language by hearing it is a great way of learning.
                        This is why at ULingual we offer curated music playlists, movies & show recommendations, and boook recommendations
                        to further create a more unique learning experience.
                    </p> 
                </div>
            </div>
            <div className="ab-sec">
                    <button className="ab-drop">
                      How do we Stand Out?
                    </button>
                
                <div className="ab-context">
                    <p>
                    What makes ULingual stands out from the rest lies in our alternative learnng methods.
                    Speaking the language is only half the battle, learning by hearing and recognizing phrases
                    and sayings from the language is the other half.
                    </p> 
                </div>
            </div>
            <div className="ab-sec">
                    <button className="ab-drop">
                      Immerse Yourself!
                    </button>
                
                <div className="ab-context">
                    <p>
                    Here at ULingual we believe it is critical to immerse yourself in the language by getting
                    involved with its culture, whether through music, books, movies, or television.
                    </p> 
                </div>
            </div>
            <div className="ab-sec">
                    <button className="ab-drop">
                      Learn Without Judgement!
                    </button>
                
                <div className="ab-context">
                    <p>
                    Come and join us in a judgment free enviornment,
                    collaborating and improving each other's knowledge and skill within the 
                    comfort of your home.
                    </p> 
                </div>
            </div>
        </div>
    </div>
  
     );

}
export default AboutUs;