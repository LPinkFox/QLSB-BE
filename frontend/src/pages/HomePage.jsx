import React from 'react'
import Navbar from '../components/Navbar'
import './homepage.css'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        
        <img className='my-homepage-img' src="https://img.lovepik.com/photo/40015/3199.jpg_wh860.jpg" alt="" />
    </div>
  )
}

export default HomePage