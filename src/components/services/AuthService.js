import Axios from 'axios'
import BASE_URL from '../Constant.js'

export const registerUser = async (userData)=>{
   
  try{
    const { data: {status, message, data} } =   await Axios.post(`${BASE_URL}/register`,userData);
    return {
      status,
      message,
      data
    };
  }
  catch(error){
    const {data:{status,data }}=error.response
    return {
        status,
        data
    }
  }
      
}

export const loginUser = async (userData)=>{
   
  try{
    const { data: {status, message, data} } =   await Axios.post(`${BASE_URL}/login`,userData);
    return {
      status,
      message,
      data
    };
  }
  catch(error){
    const {data:{status,data,message}}=error.response
    return {
        status,
        data,
        message,
    }
  }
      
}

