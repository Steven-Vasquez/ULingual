import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Tutors from './pages/TutorsPage';
import ContactPage from './pages/ContactUsPage';
import FAQ from './pages/FaqPage';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Results from './pages/SearchResults';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/Maincontent';
import Dashboard from './pages/Dashboard';
import Exercise1Page from './pages/Exercise1Page';
import FriendsList from './pages/FriendsListPage';
import Lesson from './pages/Lesson1Page';
import VideoRoomPage from './pages/VideoRoomPage';
import RecommendationPage from './pages/RecommendationPage';
import GlobalForumPage from './pages/GlobalForumPage.js';
import Forum1 from './pages/Forum1';
import BookRecommendationPage from './pages/BookRecommendation';
import VideoRecommendationPage from './pages/VideoRecommendation';
import MusicRecommendationPage from './pages/MusicRecommendation';
import TermsAndConditions from './pages/Terms&Conditions';
import ExerciseAns1 from './pages/ExerciseAns1';
import Exercise2Page from './pages/Exercise2Page';
import ExerciseAns2 from './pages/ExerciseAns2';
import ExerciseResults from './pages/ExerciseResults';
import Lesson2Page from './pages/Lesson2Page';
import LessonComplete from './pages/LessonComplete';
import TutorProfile from './pages/TutorProfile';
import UserProfile from './pages/UserProfile';
import UserProfileEdit from './pages/UserProfileEdit';
import FriendsProfile from './pages/FriendsProfile';
import SelectLanguage from './pages/SelectLanguage';
import CreateVid from './pages/CreateVid';
import Lobby from './components/video_components/Lobby';
import InboxPage from './pages/InboxPage';


import axios from 'axios';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  axios.defaults.withCredentials = true; // Allow cookies to be stored in the browser

  useEffect(() => {
    axios.post('https://50.18.108.83.nip.io:3001/checkLogin')
    //axios.post("http://localhost:3001/checkLogin")
      .then(res => {
        console.log("The response from the login get in App.js is: is: ");
        console.log(res.data.user);
        console.log(res.data);
        if (res.data.loggedIn === true) {
          setLoggedIn(true);
          setUsername(res.data.user.Uusername);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  console.log("The loggedIn variable in App.js is: ");
  console.log(loggedIn);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Router>
      <Navbar loggedIn={loggedIn} username={username}/>
        <Routes>
          <Route exact path="/" element={<MainContent loggedIn={loggedIn}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/TutorsPage" element={<Tutors />}/>
          <Route path="/ContactUs" element={<ContactPage/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/SearchResults" element={<Results/>}/>
          <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
          {loggedIn ? (
            // Routes that can only be accessed if user is logged in
            <>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Exercise1Page" element={<Exercise1Page/>}/>
              <Route path="/FriendsListPage" element={<FriendsList/>}/>
              <Route path="/GlobalForumPage" element={<GlobalForumPage/>}/>
              <Route path="/LessonPage" element={<Lesson/>}/>
              <Route path="/VideoRoomPage" element={<VideoRoomPage/>}/>
              <Route path="/RecommendationPage" element={<RecommendationPage/>}/>
              <Route path="/BookRecommendation" element={<BookRecommendationPage/>}/>
              <Route path="/VideoRecommendation" element={<VideoRecommendationPage/>}/>
              <Route path="/MusicRecommendation" element={<MusicRecommendationPage/>}/>
              <Route path="/TutorProfile" element={<TutorProfile/>}/>
              <Route path="/UserProfile" element={<UserProfile/>}/>
              <Route path="/UserProfileEdit" element={<UserProfileEdit/>}/>
              <Route path="/Forum1" element={<Forum1/>}/>
              <Route path="/ExerciseAns1" element={<ExerciseAns1/>}/>
              <Route path="/ExerciseAns2" element={<ExerciseAns2/>}/>
              <Route path="/Exercise2Page" element={<Exercise2Page/>}/>
              <Route path="/ExerciseResults" element={<ExerciseResults/>}/>
              <Route path="/Lesson2Page" element={<Lesson2Page/>}/>
              <Route path="/LessonComplete" element={<LessonComplete/>}/>
              <Route path="/FriendsProfile" element={<FriendsProfile/>}/>
              <Route path="/SelectLanguage" element={<SelectLanguage/>}/>
              <Route path="/createVid" element={<createVid/>}/>
              <Route path="/Lobby" element={<Lobby/>}/>
              <Route path="/InboxPage" element={<InboxPage/>}/>
            </>
          ) : null}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;