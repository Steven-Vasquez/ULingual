import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import MainContent from './components/Maincontent';

function App() {


  return (
    <>
      {/* OVERALL LAYOUT 
      * [X] nav/burger bar
      * [-] (basic about)
      * [-] (start trial/get started)
      * [ ] (Languages offered)- with flags
      * 
      * scroll down ->
      * [-] why us vs others? what we offer
      * [-] (website footer)
      */}

      <Navbar />
      <MainContent />
      <Footer />

      
      

      
    </>

  );
}

export default App;
