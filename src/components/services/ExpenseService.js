import Axios from 'axios'
import BASE_URL from '../Constant.js'

export const computeFilteredExpenses = (expenses,year) =>{
   let res = [];
   expenses.forEach(exp=>{
       if(Number(new Date(exp.date).getFullYear())=== Number(year)){
            res.push(exp);
       }
   })
   return res;
}

export const getAllExpenses = async (userData)=>{
   
    try{
      const { data: {status, message, data} } =   await Axios.get(`${BASE_URL}/expenses`);
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