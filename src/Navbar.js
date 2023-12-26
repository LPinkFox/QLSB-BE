import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
            <a class ='navbar-brand' href='/'>Admin</a>
          <div class="collapse navbar-collapse" >
            <ul class="navbar-nav ms-auto mb-2 mr-auto">
              <li class="nav-item ">
                <a class="nav-link text-white mx-2 rounded border" href='/'>Account</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white mx-2 rounded border" href='/'>Logout</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  )
}
