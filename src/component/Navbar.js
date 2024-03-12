import React from 'react';
<<<<<<< HEAD
import Logo from '../../img/logo.png';
import UserIcon from '../../img/usericon.png';
=======
import Logo from '../img/logo.png';
// import UserIcon from '../../img/usericon.png';
import {Link} from "react-router-dom";
>>>>>>> 877aef00225e4482fbaa7fa9c1a07c7e37ae5b8f

function Header () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
<<<<<<< HEAD
                    <a className='navbar-brand' href="#">
=======
                    <Link className='navbar-brand' to="/">
>>>>>>> 877aef00225e4482fbaa7fa9c1a07c7e37ae5b8f
                        <img src={Logo} style={{height:60, width:"100%"}} alt='' />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
<<<<<<< HEAD
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Check-in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
=======
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
>>>>>>> 877aef00225e4482fbaa7fa9c1a07c7e37ae5b8f
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