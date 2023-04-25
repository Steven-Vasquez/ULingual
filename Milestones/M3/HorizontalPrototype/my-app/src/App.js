import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tutors from './pages/TutorsPage';
import ContactPage from './pages/ContactUsPage';
import FAQ from './pages/FaqPage';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Results from './pages/ResultPage';
import Pricing from './pages/Pricing&Plans';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/Maincontent';


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
          <Route path="/ResultsPage" element={<Results/>}/>
          <Route path="/Pricing&Plans" element={<Pricing/>}/>
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
