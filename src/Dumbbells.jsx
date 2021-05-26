import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';

const Dumbbells=()=>{
    return(<>
    <Navbar/>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/service" component={Service}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to ="/"/>
        </Switch>
    </>);
};
export default Dumbbells;