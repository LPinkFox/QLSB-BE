
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup'
import { UserContextProvider } from './contexts/UserContext';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Rent from './pages/Rent';
import Admin from './pages/Admin';
import { ShopContextProvider } from './contexts/ShopContext';
import { RentContextProvider } from './contexts/RentContext'
import AdminRoute from './AdminRoute';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <UserContextProvider>
          <RentContextProvider>
            <Router>
              <Routes>
                <Route path='/' element={<LoginSignup />}></Route>
                <Route path='/homepage' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/rent' element={<Rent />}></Route>
                <Route path='/admin/*' element={<AdminRoute/>}></Route>
              </Routes>
            </Router>
          </RentContextProvider>
        </UserContextProvider>
      </ShopContextProvider>

    </div>
  );
}

export default App;
