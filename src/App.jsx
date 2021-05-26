import React from 'react';
import './index.css';
import Chand from './Chand';
import {add,sub} from './Cal';
function App(){
    return(<> <Chand/>
    <ul>
<li>{add(20,20)}</li>
<li>{sub(20,7)}</li>
</ul></>
    );
}
export default App;