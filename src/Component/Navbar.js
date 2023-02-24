import React from 'react'
import brandLogo from '../Component/apple-icon-57x57.png'
import { NavLink, Outlet } from 'react-router-dom'


function Navbar(mode) {
  return (
    <div className='bg-blue' >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand"> <img src={brandLogo} style={{width:"40px"}} alt='brand logo'/><span> Textutils</span></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
          
        </li>
      </ul>

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet />
    </div>
    
  )
}

export default Navbar