import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
function LoginForm(props) {
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
        props.onSubmit(userData)    
    }
  return (
    <div>
         <form onSubmit={submitHandler}>
            <div className="auth-new-expense__control first-div">
                <label>Email</label>
                <input type="email" value={email}  onChange={emailHandler}  autoComplete="on"  />
            </div>

            <div className="auth-new-expense__control" style={{marginTop:'20px'}}>
                <label>Password</label>
                <input type="password" value={password}  onChange={passwordHandler}  autoComplete="on"  />
            </div>
        
            <div className="" style={{marginTop:'40px'}}>
                <Link to={"/register"}><button type="button">Don't have an account?</button></Link>
                <button type="submit"  disabled={props.errorStatus}>{!props.errorStatus ?'Login':'Please wait...'}</button>
            </div>

            </form>
    </div>
  );
}

export default LoginForm;
