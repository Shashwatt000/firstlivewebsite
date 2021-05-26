import React from 'react';
import {NavLink} from 'react-router-dom';
const Office=()=>{
return (
    <>
    <NavLink exact activeClassName="active_class" to='/johncena'>About Us</NavLink>
    <NavLink exact activeClassName="active_class" to ='/contact'>Contact</NavLink>
    <NavLink exact activeClassName="active_class" to ='/search'>Search</NavLink>
    </>
);
};
export default Office;