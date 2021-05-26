import React, { useState } from 'react';
const Haryana=()=>{
    var purple ="purple";
var [bg,setColor]=useState(purple);


    const room=()=>{
        let red="red";
        setColor(red);
    };
    return(
        <>
        <div style={{backgroundColor:bg}}>
        <button onClick={room}>AAde Marle</button>
        </div>
        </>
    );
}
export default Haryana;