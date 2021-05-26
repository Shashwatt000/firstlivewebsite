import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Pandat from './Pandat';
import Vasu from './Vasu';
import Error from './Error';
import Office from './Office';
import Sanju from './Sanju';
import Pradyumn from './Pradyumn';
import Bhalu from './Bhalu';
const Bohemia=()=>{
    return(
        <>
        <Office/>
        <Switch>
        <Route exact path='/' component={Vasu}/>
        <Route excat path='/search'component={Bhalu}/>
        <Route exact path='/contact/' component={()=><Pandat name="Gandu"/>}/>
        <Route path='/contact/:sanju' component={()=><Sanju name="Suicider"/>}/>
        <Route component={Error}/>
        </Switch>

        </>
    );
};
export default Bohemia;