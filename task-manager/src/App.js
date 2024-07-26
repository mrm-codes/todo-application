import './App.css';
import React from 'react';
import Home from './Components/Home';

import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



export default function App(){
  return(
 

    <Router>
      <div className="navigation">
                <div className="logo"><Link to='/'>Viva <span>???</span></Link></div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/Register'>Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
            </Routes>
    </Router>
 
  );
}
