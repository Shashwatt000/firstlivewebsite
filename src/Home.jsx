import React from 'react';
import Navbar from './Navbar';
import web from '../src/Component/images/love.jpg';
import { NavLink } from 'react-router-dom';
const Home=()=>{
    return(<>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="col-md-6 pt-5 pt-lg-0">
        <h1> Website cum <strong className="brand-name">Memories</strong></h1>
        <h2> dedicated to all my friends who sacrifice their life because of Information Technology</h2>
        <div className="mt-3">
            <NavLink to="/service" className="btn-get-started">Lets begin</NavLink>
        </div>
               <div className="col-lg-6 order-lg-2 header-img">
               <img src={web} alt="image"/>
               </div>
        </div>

        </div>
        </div>

        </div>
        </section>
    </>);
};
export default Home;