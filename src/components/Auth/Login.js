
import React,{useState} from 'react';
 import { Link } from "react-router-dom";
import '../styles/Auth/Auth.css'

const Login = ()=> {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const emailHandler = (e)=>{
      setEmail(e.target.value)
  }
  const passwordHandler = (e)=>{
      setPassword(e.target.value)
  }

  const submitHandler = (e)=>{
      e.preventDefault()
      const userData={
          email:email,
          password:password
      } 
      console.log(userData)
    
  }
  return <div>
        <h1 className="auth-header">Login</h1>
        <div className="auth-login-box">
        <a  className="slink" href={'/'}>Home</a>
          <form onSubmit={submitHandler}>
                
                    <div className="auth-new-expense__control first-div">
                        <label>Email</label>
                        <input type="email" value={email}  onChange={emailHandler} required autoComplete="on"  />
                    </div>

                    <div className="auth-new-expense__control" style={{marginTop:'20px'}}>
                        <label>Password</label>
                        <input type="password" value={password}  onChange={passwordHandler} required autoComplete="on"  />
                    </div>
                
                <div className="" style={{marginTop:'40px'}}>
                    <Link to={"/register"}><button type="button">Don't have an account?</button></Link>
                    <button type="submit">Login</button>
                </div>

            </form>
           
      </div>
      </div>
}

export default Login;
