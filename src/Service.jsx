import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./Component/images/beer.jpg";

const Service =()=>{
    return(<>
        <div className="my-5">
        <h1 className="text-center">Hello all my bros, Currently am not avialable to provide you any services so better fuck off  </h1>
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
  <img src={web} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Drink beer fuck fear</h5>
    <p className="card-text">This service page is dedicated to the stone cold steve austin my fav wwe star huge respect for him</p>
    <NavLink to="/home" class="btn btn-primary">Home </NavLink>
  </div>
  
</div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    </>);

};
export default Service;