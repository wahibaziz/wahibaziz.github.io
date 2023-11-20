import './App.css';
import Nav from './Components/Navigation';
import Jobs from './Components/Jobs';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Index from './Components/Index';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Registration from './Components/Registration';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/about-us.html" element={<Aboutus />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/listing.html" element={<Jobs />} />
          <Route path="/contact-us.html" element={<Contactus />} />
          <Route path="/Login.html" element={<Login />} />
          <Route path="/registration.html" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
