import React from 'react'
import '../../styles/Auth/Auth.css'
import {useNavigate } from "react-router-dom";



const LogoutButton = (props)=> {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('token');
        alert('Logged out successfully');
        navigate('/login')
    }


    const token = localStorage.getItem('token')
    if(token) {
        return <div className="logout-div"><button className='logout-button' onClick={logout}>Logout</button></div> 
    }

    return (
        <></>
    )
}

export default LogoutButton
