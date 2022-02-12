
import React,{useState,useEffect} from 'react';
import {useNavigate,useLocation} from "react-router-dom";
import '../styles/Auth/Auth.css'
import LoginForm from './Forms/LoginForm'
import {loginUser} from '../services/AuthService'

const Login = (props) => {

  const navigate = useNavigate();

  const [errors,setErrors] = useState([])

  const [errorStatus,setErrorStatus] = useState(false)

  const [authMessage,setAuthMessage] = useState(null)

  const location = useLocation();
 
  

  const submitHandler = async(userData)=>{
    setErrorStatus(true)    
    const response =  await loginUser(userData)
 
     if (response.status ==='error') {
       setAuthMessage(null)
       setErrorStatus(false)
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
       localStorage.setItem('isLoggedIn',true);
       navigate('/');
     }
    
    
  }

  useEffect(() => {
      const isLoggedIn  = localStorage.getItem('isLoggedIn')
      if (isLoggedIn){
        navigate('/');
      }
      setAuthMessage(location.state ? location.state.msg : null)
   }, [location,navigate]); // Only re-run the effect if count changes




  return <div>
        <h1 className="auth-header">Login</h1>
        <div className="error-div">
        <h2>{authMessage}</h2>
            <ul className="error-lists">
              {errors.length>0 &&errors.map(err=>{
                  return <li key={err}>{err}</li>
              })}
            </ul>
          </div> 
        <div className="auth-login-box">
        <a  className="slink" href={'/'}>Home</a>
        <LoginForm onSubmit={submitHandler} errorStatus={errorStatus}  />      
      </div>
      </div>
}

export default Login;
