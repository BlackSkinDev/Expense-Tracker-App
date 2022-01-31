import React from 'react';
import logo from './Images/notfound.png'; 
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{textAlign: 'center'}}>
        <Link to={"/"}>
          <p>
              <button style={{
                width: '10%',
                height: '50px',
                borderRadius: '10px'
              }}>Home</button>
          </p>
        </Link>
       <img style={{width:'30%', height:'50%'}} src={logo} alt="Logo" />;
    </div>
  );
}
