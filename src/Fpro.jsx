import React, { useState } from 'react';
import Todolists from './Todolists';
const Fpro=()=>{
    const[inputList, setInputList]=useState();
    const[rockford,malta]=useState([]);
const daru =(event)=>{
    setInputList(event.target.value);
};
const listofitems=()=>{
malta((olditems)=>{
    return[...olditems,inputList];
});
setInputList("");
};
return(
    <><div>
        <div>
            <br/>
            <h1>To Do List</h1>
            <br/>
            <input type="text" placeholder="Items likho be" onChange={daru}
                value={inputList}
            />
            <button onClick={listofitems}>+</button>

            <ol>
                {rockford.map((intvel)=>{
                    return <Todolists text={intvel}/>
                })}
            </ol>
        </div>
    </div>
    </>
);
}
export default Fpro;