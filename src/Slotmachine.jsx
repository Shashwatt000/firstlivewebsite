import React from 'react';
var x;
var y;
var z;
const Bby =()=>{
x=7;
y=9;
z=7;
if(x===y&&y===z)
{return(<>
    <h2>{x},{y},{z}</h2>
<p>this is a match</p></>);}
else
{return(<>  <h2>{x},{y},{z}</h2><p>This is not a match</p></>);}

}
const Slotmachine = () =>{
    return(
        <><div>
        <h1> Welome here </h1>
        </div>
      
        <Bby/>
</>
    );
}
export default Slotmachine;