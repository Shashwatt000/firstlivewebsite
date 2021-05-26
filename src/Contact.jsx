import React, { useState } from 'react';
const Contact =()=>{
    const[data, setData]= useState({
        fullname: "",
        msg:""
    });
    const panchkula=(event)=>{
        const {name , value}= event.target;
        setData((preval)=>{
          return{
            ...preval,
            [name]:value
        };
        });
    };
    const hansi=(e)=>{
        e.preventDefault();
        alert(`name is ${data.fullname} memory is ${data.msg}`);

    };
    return(<>
        <div className="my-5">
        <h1 className="text-center">Contact Shashwat</h1>
        </div>
        <div className="container cont_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form >
        <form >
  <div class="mb-3">
    <label for="exampleInputEmail1"  class="form-label">Full Name</label>
    <input type="text" placeholder="Enter your Name pls" name="fullname" value={data.fullname} onChange={panchkula} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp"  class="form-text">We'll never share your Name with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" name="msg" value={data.msg} onChange={panchkula} class="form-label">Memory</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={hansi} type="submit" class="btn btn-primary">Submit</button>
</form>
        </form>

        </div>

        </div> 

        </div>
    </>);

};
export default Contact;