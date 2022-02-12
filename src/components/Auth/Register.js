import React,{useState,useEffect} from 'react';
 import {useNavigate } from "react-router-dom";
import '../styles/Auth/Auth.css'
import {registerUser} from '../services/AuthService'
import RegisterForm from './Forms/RegisterForm'

import Axios from 'axios'
import BASE_URL from '../Constant.js'

function Register() {

  const navigate = useNavigate();

  const [errors,setErrors] = useState([])

  const [errorStatus,setErrorStatus] = useState(false)
  
  
  const registerHandler = async(userData)=>{
    setErrorStatus(true)    
   
     const response =  await registerUser(userData)
     if (response.status ==='error') {
      setErrorStatus(false)
      setErrors(previousErrors=>{
        return[...response.data]
      });
     }
     if (response.status ==='success') {
       alert(response.message)
       navigate('/login');
     }   
  }

  useEffect(() => {
    const isLoggedIn  = localStorage.getItem('isLoggedIn')
    if (isLoggedIn){
      navigate('/');
    }
 }, [navigate]); // Only re-run the effect if count changes




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
          <RegisterForm onSubmit={registerHandler} errors={errors}  errorStatus={errorStatus} />  
        </div>
    </div>
}

export default Register;
