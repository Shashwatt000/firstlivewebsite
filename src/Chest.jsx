import React, { useState } from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
const Chest=(props)=>{
    const[line,setLine]=useState(false);
    const cutIt=()=>{
        setLine(true);
        
    };

return (
<div>
<span onClick={cutIt}><RemoveCircleIcon/></span>
<li style={{textDecoration: line ? "line-through":"none"}}>{props.text}</li></div>);
};
export default Chest;