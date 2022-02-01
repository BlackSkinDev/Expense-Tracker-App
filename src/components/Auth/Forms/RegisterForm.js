import React,{useState} from 'react';
 import { Link,useNavigate } from "react-router-dom";



function RegisterForm(props) {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')
  
  const usernameHandler = (e)=>{
      setUsername(e.target.value)
      
  }
  const emailHandler = (e)=>{
      setEmail(e.target.value)
  }
  const passwordHandler = (e)=>{
      setPassword(e.target.value)
  }

  const cpasswordHandler = (e)=>{
    setCpassword(e.target.value)
}

  const submitHandler =async(e)=>{
      e.preventDefault()
      const userData={
          username:username,
          email:email,
          password:password,
          password_confirmation:cpassword
      }  
      props.onSubmit(userData)
    
  }


  return<div>
         
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
                    
                      <div className="auth-new-expense__control">
                          <label>Confirm Password</label>
                          <input type="password" value={cpassword}  onChange={cpasswordHandler} required autoComplete="on" />
                      </div>

                  </div>
                  
                  <div className="auth-register-form__actions">
                      <Link to={"/login"}><button type="button">Already Registered?</button></Link>
                      <button type="submit">Register</button>
                  </div>    
              </form>
            
                
        </div>
   
}

export default RegisterForm;
