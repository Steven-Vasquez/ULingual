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
import Lesson from './pages/LessonPage';
import VideoRoomPage from './pages/VideoRoomPage';
import RecommendationPage from './pages/RecommendationPage';
import GlobalForumPage from './pages/GlobalForumPage.js';
import Forum1 from './pages/Forum1';
import BookRecommendationPage from './pages/BookRecommendation';
import VideoRecommendationPage from './pages/VideoRecommendation';
import TVShowRecommendationPage from './pages/TVShowRecommendation';
import TermsAndConditions from './pages/Terms&Conditions';
import TutorProfile from './pages/TutorProfile';
import UserProfile from './pages/UserProfile';
import UserProfileEdit from './pages/UserProfileEdit';


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
          <Route path="/SearchResults/" element={<Results/>}/>
          <Route path="/Pricing&Plans" element={<Pricing/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/ExercisePage" element={<Exercise/>}/>
          <Route path="/FriendsList" element={<FriendsList/>}/>
          <Route path="/GlobalForumPage" element={<GlobalForumPage/>}/>
          <Route path="/LessonPage" element={<Lesson/>}/>
          <Route path="/VideoRoomPage" element={<VideoRoomPage/>}/>
          <Route path="/RecommendationPage" element={<RecommendationPage/>}/>
          <Route path="/BookRecommendation" element={<BookRecommendationPage/>}/>
          <Route path="/VideoRecommendation" element={<VideoRecommendationPage/>}/>
          <Route path="/TVShowRecommendation" element={<TVShowRecommendationPage/>}/>
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
          <Route path="/TutorProfile" element={<TutorProfile/>}/>
          <Route path="/UserProfile" element={<UserProfile/>}/>
          <Route path="/UserProfileEdit" element={<UserProfileEdit/>}/>
          <Route path="/Forum1" element={<Forum1/>}/>
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
