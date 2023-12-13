
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/Home/HomePage';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path='/' element={<LoginSignup setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App;
