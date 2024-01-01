import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#3366FF'}} >
        <div className="container-fluid">
          <div class="collapse navbar-collapse" >
            <ul class="navbar-nav ms-auto mb-2 mr-auto">
              <li class="nav-item ">
                <Link class="nav-link text-white mx-2 rounded border" to='/admin/taikhoanadmin'>Account</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link text-white mx-2 rounded border" to='/'>Logout</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
  )
}
