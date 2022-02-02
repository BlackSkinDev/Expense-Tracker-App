import React,{useState} from 'react';
 import {useNavigate } from "react-router-dom";
import '../styles/Auth/Auth.css'
import {registerUser} from '../services/AuthService'
import RegisterForm from './Forms/RegisterForm'

import Axios from 'axios'
import BASE_URL from '../Constant.js'

function Register() {

  const navigate = useNavigate();

  const [errors,setErrors] = useState([])
  
  const registerHandler = async(userData)=>{
    
     const response =  await registerUser(userData)
     if (response.status ==='error') {
      setErrors(previousErrors=>{
        return[...response.data]
      });
     }
     if (response.status ==='success') {
       alert(response.message)
       navigate('/login');
     }
      
      
 

    
     
  }
  return<div>
          <h1 className="auth-header">Register</h1> 
          <div className="error-div">
            <ul className="error-lists">
              {errors.length>0 &&errors.map(err=>{
                  return <li key={err}>{err}</li>
              })}
            </ul>
          </div> 
          <div className="auth-register-box">
          <a  className="slink" href={'/'}>Home</a>
          <RegisterForm onSubmit={registerHandler} errors={errors}/>  
        </div>
    </div>
}

export default Register;
