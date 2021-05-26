import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar=()=>{
    return(<>
    <div className="container-fluid nav_bg">
      <div className="row">
       <div className="col-10 mx-auto">

       
        <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to="/">Chand</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
    </>);

};
export default Navbar;