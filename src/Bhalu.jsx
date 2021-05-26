import React, { useState } from 'react';
import Pradyumn from './Pradyumn';
const Bhalu=()=>{
    const[img,setImg]=useState();
    const hitman=(event)=>{
     const data=event.target.value;
     setImg(data);
    };
    return(
        <>
            <input type="text" placeholder="search kar mast photo dikhegi" value ={img} onChange={hitman}/>
        <Pradyumn name={img}/>
        </>

    );
};
export default Bhalu;