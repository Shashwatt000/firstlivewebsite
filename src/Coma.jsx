import React, { useState } from 'react';
import axios from "axios";
const Coma=()=>{
    const [num,setnum]= useState();
return(
    <><h1>You select {num} </h1>
    <select value={num} onChange={(event)=>{
setnum(event.target.value);
    }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    </>
);
};
export default Coma;