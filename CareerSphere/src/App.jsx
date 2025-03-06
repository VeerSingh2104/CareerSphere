// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Homepage/homepage'
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Profile from './components/Profile/profile';
import Dashboard from './components/Dashboard/dashboard';
import Consultation from './components/Consultation/consultation';
function App() {

  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/consultation" element={<Consultation/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
