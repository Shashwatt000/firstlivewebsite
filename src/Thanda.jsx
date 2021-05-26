import React, { createContext } from 'react';
import Coca from './Coca';
const PhlaNaam = createContext();
const AakhriNaam = createContext();

const Thanda=()=>{
return(
    <>
     <PhlaNaam.Provider value={"Chand"}>
     <AakhriNaam.Provider value={"Sharma"}>
    <Coca/>
    </AakhriNaam.Provider>
    </PhlaNaam.Provider>
    </>
);
};
export default Thanda;
export {PhlaNaam,AakhriNaam};