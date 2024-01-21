// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Header /> */}
        <Home />
        <About />
        <Education/>
        <Projects />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;