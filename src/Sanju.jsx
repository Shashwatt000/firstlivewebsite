import React from 'react';
import { useLocation, useParams } from 'react-router';

const Sanju=(props)=>{
    const {name} =useParams();
    const location= useLocation();
return(
    <>
    <h1>hello am sanjeev urf{props.name}</h1>
    <p>My location is {location.pathname}</p>
    {location.pathname===`/contact/sanju`?(<button onClick={()=>{alert(`R tiwaari room ki yaad aagi r pandat kutta bidi le aa bhanu ke se r gogi roll krle krle n gorishankar crush `)}}>Click me</button>):null}
    </>
);
};
export default Sanju;