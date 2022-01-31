import * as React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Expenses from './components/Expenses/Expenses';
import NotFound from './components/NotFound'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const App = ()=> {
 
  
  return (
    <div>
         <Routes>
            <Route path="/" element={<Expenses/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  );
}
export default App;





















