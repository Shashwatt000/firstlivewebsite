import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';

const Chandkeep=()=>{
    const [additems,setadditems]=useState([]);
    const addnote=(note)=>{
        setadditems((predata)=>{
            return [...predata,note];
                 });
    };
    const onDelete=(id)=>{
        setadditems((oldvalue)=>{
            oldvalue.fliter((currdata,indx)=>{
             return indx!==id;
            })
        });

    }
    return(<>
    <Header/>
    <Createnote passnote={addnote}/>
    
   { additems.map((val,index)=>{
            return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                 fuckit={onDelete}
            />
        })}
    <Footer/>
    </>);

};
export default Chandkeep;