import React from 'react';
const Footer =()=>{
    const year= new Date().getFullYear();
    return(
        <p>Coppyright © {year}</p>
    );

};
export default Footer;