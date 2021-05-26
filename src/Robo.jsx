import React, { useState } from 'react';

const Robo =()=>{
    const[gand,aand]=useState();
    const [fullName,newf]=useState({
        fname:'',
        lname:''
    });

    
    const sexy=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        newf((preValue)=>{
            if(name==="fname"){return{
                fname: value,
                lname: preValue.lname
            };}else if(name==="lname"){
                return{
                    fname: preValue.fname,
                    lname: value
                };
            };
        });

    };
    const submit=()=>{
     aand(fullName);
    }
    return (
<>
<h1>hello {gand} </h1>
    <input type = "text" placeholder="naam likh gandu" name="fname"
    onChange={sexy} value={fullName.fname}/><br/>
    
    <input type = "text" placeholder="caste likh gandu" name="lname"
    onChange={sexy} value={fullName.lname}/>
    <button onClick={submit}>Click here Lawde</button>
</>
    );
}
export default Robo;