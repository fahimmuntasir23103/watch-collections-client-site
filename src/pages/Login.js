import {  Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
  const {signInWithGoogle} = useAuth();
  return (
    <div className="mt-">
   
      <form className="form">
      <h1 className="login">PLEASE LOGIN</h1>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    {/* <input type="mail" class="from-control" id="exampleInputEmail1" aria-describedby="emailHelp"> */}
    <div id="emailHelp" class="form-text"></div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    {/* <input type="password" class="form-control" id="exampleInputPassword1"> */}
  </div>
  <div>
  <Link to="/home"><button onClick={signInWithGoogle} className="btn btn-danger">Submit</button></Link>
  <br />
  <Link to="/signin">Register</Link>
  </div>
</form>


      </div>
  );
};

export default Login;