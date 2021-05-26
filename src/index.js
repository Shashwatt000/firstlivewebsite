import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  './index.css';
import {BrowserRouter} from 'react-router-dom';
import Dumbbells from './Dumbbells';


ReactDOM.render(<>
<BrowserRouter>
   <Dumbbells/>
   </BrowserRouter>
</>
   ,document.getElementById("root"));


