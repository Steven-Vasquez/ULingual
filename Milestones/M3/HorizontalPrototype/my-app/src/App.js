import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tutors from './pages/TutorsPage';
import ContactPage from './pages/ContactUsPage';
import FAQ from './pages/FaqPage';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Results from './pages/SearchResults';
import Pricing from './pages/Pricing&Plans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/Maincontent';
import Dashboard from './pages/Dashboard';
import Exercise from './pages/ExercisePage';
import FriendsList from './pages/FriendsListPage';
import GlobalForum from './pages/GlobalForumPage';
import Lesson from './pages/LessonPage';
import VideoRoom from './pages/VideoRoomPage';
import RecommendationPage from './pages/RecommendationPage';

function App() {
  
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TutorsPage" element={<Tutors />}/>
          <Route path="/ContactUs" element={<ContactPage/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/SearchResults/:search" element={<Results/>}/>
          <Route path="/Pricing&Plans" element={<Pricing/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Exercise" element={<Exercise/>}/>
          <Route path="/FriendsList" element={<FriendsList/>}/>
          <Route path="/GlobalForum" element={<GlobalForum/>}/>
          <Route path="/Forum" element={<Lesson/>}/>
          <Route path="/VideoRoom" element={<VideoRoom/>}/>
          <Route path="/RecommendationPage" element={<RecommendationPage/>}/>
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
