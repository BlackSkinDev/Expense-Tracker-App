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
    const { status,message,data } = error.response.data;
    return {
      status,
      message,
      data
    };
  }
      
}