import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Stars from './components/Stars';
import Gallery from './components/Gallery';
import Comic from './components/Comic';
import Timeline from './components/TimeLine';
import LoveMessages from './components/LoveMessages';

function App() {
  return (
    <Router>
      <Header />
      <Stars />
   
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/collage" element={<Gallery />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/love-messages" element={<LoveMessages />} />
      </Routes>
    </Router>
  );
}

export default App;
