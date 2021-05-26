import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Createnote=(props)=>{
    const[note,setNote]=useState({
        title:"",
        content:""
    });
    const boom=(event)=>{
        const value=event.target.value;
        const name =event.target.name;
         setNote((preVal)=>{
             return{
                 ...preVal,
                 [name]:value,
             };
         });
    };
    const guys=()=>{
        props.passnote(note);
        setNote(
            {
        title:"",
        content:""
    }
        );
    };
    return(
        
        <div className="main_div">
            <form autoComplete="off">
            <input type="text" value={note.title} name="title" onChange={boom} placeholder="title"/  >
            <textarea rows="" column="" value={note.content} name="content" onChange={boom} placeholder="wrte note here..."></textarea>
            <Button onClick={guys}><AddCircleIcon/></Button>
            </form>
        </div>
        
    );
};
export default Createnote;