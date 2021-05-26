import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const Cherry =()=>{
    const[num,setNum]= useState(0);
    const creepy =()=>{

        setNum(num +1);
    };
    const jimmy =()=>{
        
           if(num>0){ 
            setNum(num-1);
           }else {
               alert("sorry")
               setNum(0);
           };
      
    };
    return(
        <>
            <h1>{num}</h1>
            <Tooltip title="Add">
            <Button onClick={creepy}><AddIcon/></Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button onClick={jimmy}><DeleteForeverIcon/></Button>
            </Tooltip>
        </>
    );

}
export default Cherry;