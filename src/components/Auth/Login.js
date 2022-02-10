
import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import '../styles/Auth/Auth.css'
import LoginForm from './Forms/LoginForm'
import {loginUser} from '../services/AuthService'

const Login = ()=> {

  const navigate = useNavigate();

  const [errors,setErrors] = useState([])

  const submitHandler = async(userData)=>{
     
    const response =  await loginUser(userData)
    
     if (response.status ==='error') {
       
      if (!response.data){
          setErrors(previousErrors=>{
            return[...[response.message]]
          });
       }
       else{
          setErrors(previousErrors=>{
            return[...response.data]
          });
       }
     }
     if (response.status ==='success') {
       localStorage.setItem('token',response.data.token);
       navigate('/');
     }
    
  }
  return <div>
        <h1 className="auth-header">Login</h1>
        <div className="error-div">
            <ul className="error-lists">
              {errors.length>0 &&errors.map(err=>{
                  return <li key={err}>{err}</li>
              })}
            </ul>
          </div> 
        <div className="auth-login-box">
        <a  className="slink" href={'/'}>Home</a>
        <LoginForm onSubmit={submitHandler} />      
      </div>
      </div>
}

export default Login;
