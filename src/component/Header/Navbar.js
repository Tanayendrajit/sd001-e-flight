import React from 'react';
import Logo from '../../img/logo.png';
import UserIcon from '../../img/usericon.png';

function Header () {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
                <div className="container-fluid">
                    <a className='navbar-brand' href="#">
                        <img src={Logo} style={{height:60, width:"100%"}} alt='' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Check-in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bookings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <div className="d-grid gap-2 mx-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2 button-hover-class" type="button">Login</button> 
            
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
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    
*/