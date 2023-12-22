
import './App.css';
import { LoginSignup } from './Page/LoginSignup';
import { shop } from './Page/shop'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { cart } from './Page/cart'
import { loginContextProvider } from './context/login-context'
function App() {
  return (
    <div>
      <loginContextProvider>
        <Router>
          <Routes>
            <Route path='/cart' element={<cart />} />
            <Route path='/shop' element={<shop />} />
            <Route path='/' element={<LoginSignup />} />
          </Routes>
        </Router>
      </loginContextProvider>

    </div>
  )
}

export default App;
