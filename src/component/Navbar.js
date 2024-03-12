import React from 'react';
import Logo from '../img/logo.png';
// import UserIcon from '../../img/usericon.png';

function Header () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className='navbar-brand' href="/#">
                        <img src={Logo} style={{height:60, width:"100%"}} alt='' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Check-in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">About</a>
        </li>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Login</button> 
            {/*  */}
        </div>
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
    <a class="navbar-brand" href="#">Navbar</a>
    
*/