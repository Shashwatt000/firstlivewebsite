import React, { useEffect, useState } from 'react';
const Tommy=()=>{
    const [num,setnum]=useState(0);
    useEffect(()=>{
        document.title=`you click me ${num} times`;
    });
    return(
        <>
        <button onClick={()=>{
            setnum(num+1);
        }}>Click ME Guys {num}</button>
        </>
    );

};
export default Tommy;