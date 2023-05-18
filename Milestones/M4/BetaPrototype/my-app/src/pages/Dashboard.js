import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/Dashboard.css'

const Dashboard = () => {
    return( 
        <div className="db">
        <div className="db-st">
            <h1>Dashboard</h1>
        </div>
        <div className="db-grid">
            <div className="db-card ">
                <div className="db-name">Flashcards</div> 
                <div className="db-info">
                </div>
                <div className="db-features">
                    <div>
                        Welcome to our Flashcards! Here you can access flashcards we have
                        made for you to test your knowledge on the language you
                        are learning. Try it out for yourself!
                    </div>
                </div>
                <div className="pkg-buy-btn">
                    <Link to="/LessonPage"><button>Go to Flashcards</button></Link>
                </div>
            </div>

            <div className="db-card ">
                <div className="db-name">Video Rooms</div> 
                <div className="db-info">
                </div>
                <div className="db-features">
                    <div>
                        Welcome to our Video Rooms! Here you can connect with your friends
                        through videoe call and learn together from the comfort
                        of your home!
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/VideoRoomPage"><button>Go to Video Rooms</button></Link>
                </div>
            </div>

            <div className="db-card ">
                <div className="db-name">Global Forums</div> 
                <div className="db-info">
                </div>
                <div className="db-features">
                    <div>
                        Welcome to our Global Forums! Here you can connect with users from around
                        the world. Engage in forums, make friends, and learn more!
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/GlobalForumPage"><button>Go to Global Forums</button></Link>
                </div>
            </div>
            
            <div className="db-card">
                <div className="db-name">Rec. Content</div> 
                <div className="db-info">
                </div>
                <div className="db-features">
                    <div>
                        Welcome to our Recommended Content! Here you can access content
                        we have recommended to you based on your language choice!
                    </div>
                </div>
                <div className="pkg-buy-btn">
                <Link to="/RecommendationPage"><button>Go to Recommendations</button></Link>
                </div>
            </div>
        </div>

    </div>
        
    );
}

export default Dashboard;