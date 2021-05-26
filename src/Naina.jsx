import React, { useState } from 'react';
const Naina=()=>{
    const currentdate = new Date().toLocaleTimeString();
    
const [current,setvalue]=useState(0);
const Jaya=()=>{
    setvalue(currentdate);
};
setInterval(Jaya,1000);
return(
    <>
        <h1>{current}</h1>
        
    </>
);
}
export default Naina;