import React,{useState} from 'react';
 import { Link } from "react-router-dom";
import '../styles/Auth/Auth.css'

function Register() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const usernameHandler = (e)=>{
      setUsername(e.target.value)
      
  }
  const emailHandler = (e)=>{
      setEmail(e.target.value)
  }
  const passwordHandler = (e)=>{
      setPassword(e.target.value)
  }

  const submitHandler = (e)=>{
      e.preventDefault()
      const userData={
          username:username,
          email:email,
          password:password
      } 
      console.log(userData)
    
  }
  return<div>
          <h1 className="auth-header">Register</h1>
          <div className="auth-register-box">
            <form onSubmit={submitHandler}>
                  <div className="auth-new-expense__controls">
                      
                      <div className="auth-new-expense__control">
                          <label>Username</label>
                          <input type="text" value={username}  onChange={usernameHandler} required autoComplete="on" />
                      </div>
                      
                      <div className="auth-new-expense__control">
                          <label>Email</label>
                          <input type="email" value={email}  onChange={emailHandler} required autoComplete="on" />
                      </div>

                      <div className="auth-new-expense__control">
                          <label>Password</label>
                          <input type="password" value={password}  onChange={passwordHandler} required autoComplete="on" />
                      </div>
                  </div>
                  
                  <div className="auth-register-form__actions">
                      <Link to={"/login"}><button type="button">Already Registered?</button></Link>
                      <button type="submit">Register</button>
                  </div>    
              </form>
              <a  className="slink" href={'/'}>Home</a>
                
        </div>
    </div>
}

export default Register;
