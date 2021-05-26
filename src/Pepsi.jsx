import React, { useContext } from "react";
import{PhlaNaam,AakhriNaam} from "./Thanda";
const Pepsi =()=>{
    const fname =useContext(PhlaNaam);
    const lame= useContext(AakhriNaam);
    return (
        <h1>Haa BE Kya DEkh RHa Boss Ka Naam Hain{fname}{lame} </h1>
    );
};
export default Pepsi;