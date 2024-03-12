import React from 'react';
import Logo from '../img/logo.png';
// import UserIcon from '../../img/usericon.png';
import {Link} from "react-router-dom";

function Header () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/">
                        <img src={Logo} style={{height:60, width:"100%"}} alt='' />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Check-in</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Bookings</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link login btn btn-primary me-md-2 text-white" to="/login">Login</Link>
        </li>
        {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Login</button> 
            
        </div> */}
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}

export default Header;


/*
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    
*/