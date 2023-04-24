import React, { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'

import Login from './pages/Login';
import Tutors from './pages/TutorsPage';
import ContactPage from './pages/ContactUsPage';
import FAQ from './pages/FaqPage';
import CreateAccount from './pages/CreateAcc';
import Results from './pages/ResultPage';
import Pricing from './pages/Pricing&Plans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/Maincontent';


function App() {
  // TESTING DB CONNECTION FOR USERS
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://50.18.108.83:3001/users')
      .then(res => {
        setUsers(res.data);
        console.log("Users set!");
      })
      .catch(err => {
        console.log("Error: Users not set!");
        console.log(err);
      });
  }, []);

  console.log(users);

  // TESTING DB CONNECTION FOR TUTORS
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get('http://50.18.108.83:3001/tutors')
      .then(res => {
        setTutors(res.data);
        console.log("Tutors set!");
      })
      .catch(err => {
        console.log("Error: Tutors not set!");
        console.log(err);
      });
  }, []);

  console.log(tutors);

  return (
    <>
      {/* OVERALL LAYOUT 
      * [X] nav/burger bar
      * [-] (basic about)
      * [-] (start trial/get started)
      * [-] (Languages offered)- with flags
      * 
      * scroll down ->
      * [-] why us vs others? what we offer
      * [-] (website footer)
      */}

      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TutorsPage" element={<Tutors />}/>
          <Route path="/ContactUs" element={<ContactPage/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/CreateAcc" element={<CreateAccount/>}/>
          <Route path="/ResultsPage" element={<Results/>}/>
          <Route path="/Pricing&Plans" element={<Pricing/>}/>
        </Routes>
      <Footer />
      </Router>
      
      

      
      

      
    </>

  );
}

export default App;
