import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Chest from './Chest';
const Muscle=()=>{
    const[item,setItem]=useState();
    const[newItem,setnewItem]=useState([]);
    const itemEvent=(event)=>{
        setItem(event.target.value);

    };
    const deva=()=>{
        setnewItem((preVal)=>{
         return [...preVal,item]
        });
        setItem("");
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br/>
                <h1>Todo List</h1>
                <br/>
                <input type ="text" value={item} placeholder="items likh bhdve" onChange={itemEvent}/>
                 <Button onClick={deva}><AddIcon/></Button>
                 <br/>
                 <ol>
                
                { newItem.map((val,index)=>{
                     return  <Chest key={index} text={val}/>;
                 })}
                 </ol>
                 <br/>
                </div>
            </div>
        </>
    );

};
export default Muscle;