import React,{useState} from 'react';
 import { Link,useNavigate } from "react-router-dom";
import '../styles/Auth/Auth.css'
import {registerUser} from '../services/AuthService'
import RegisterForm from './Forms/RegisterForm'

import Axios from 'axios'
import BASE_URL from '../Constant.js'

function Register() {
  
  const registerHandler = async(userData)=>{
    
      const response =  await registerUser(userData)
      console.log(response);

      
     
  }
  return<div>
          <h1 className="auth-header">Register</h1>
          <div className="auth-register-box">
          <a  className="slink" href={'/'}>Home</a>
          <RegisterForm onSubmit={registerHandler} />  
        </div>
    </div>
}

export default Register;
