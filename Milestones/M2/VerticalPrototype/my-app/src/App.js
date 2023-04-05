import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tutors from './pages/TutorsPage';
import ContactPage from './pages/ContactUsPage';
import FAQ from './pages/FaqPage';
import CreateAccount from './pages/CreateAcc';
import Results from './pages/ResultPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/Maincontent';

const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'database-1.cjhdgriivebl.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password1',
  database: 't6db'
})


db.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});
connection.end((error) => {
});


function App() {


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
        </Routes>
      <Footer />
      </Router>
      
      

      
      

      
    </>

  );
}

export default App;
