import React from 'react';
const Pradyumn =(props)=>{
    const img =`https://source.unsplash.com/user/erondu/400x300/?${props.name}`;
    return(
        <>
<img src={img} alt="bbc"/>
        </>
    );
};
export default Pradyumn;