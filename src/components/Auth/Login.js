
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import '../styles/Auth/Auth.css'
import LoginForm from './Forms/LoginForm'

const Login = ()=> {

  const submitHandler = (userData)=>{
     
      console.log(userData)
    
  }
  return <div>
        <h1 className="auth-header">Login</h1>
        <div className="auth-login-box">
        <a  className="slink" href={'/'}>Home</a>
        <LoginForm onSubmit={submitHandler} />      
      </div>
      </div>
}

export default Login;
