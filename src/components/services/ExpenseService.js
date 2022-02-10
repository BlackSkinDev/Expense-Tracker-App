import Axios from 'axios'
import BASE_URL from '../Constant.js'

const token = localStorage.getItem('token')

const config = {
  headers: { Authorization: `Bearer ${token}` }
};


export const computeFilteredExpenses = (expenses,year) =>{
   let res = [];
   expenses.forEach(exp=>{
       if(Number(new Date(exp.date).getFullYear())=== Number(year)){
            res.push(exp);
       }
   })
   return res;
}

export const getAllExpenses = async ()=>{
    try{
      const { data: {status, message, data} } =   await Axios.get(`${BASE_URL}/expenses`,config);
      return {
        status,
        message,
        data
      };
    }
    catch(error){
      const {data:{message},status}=error.response
      return {
          status,
          message,
      }
    }
        
  }


  export const saveExpense = async (expense) => {
      try{
        const { data: {status, message, data} } =   await Axios.post(`${BASE_URL}/expenses`,expense,config);
        return {
          status,
          message,
          data
        };
      }
      catch(error){
        const  { data: {status, message, data} }=error.response
        return {
            status,
            message,
            data
        }
      }
          
    }


    export const deleteExpense = async (expenseId) => {
      try{
        const { data: {status, message, data} } =   await Axios.delete(`${BASE_URL}/expenses/${expenseId}`,config);
        return {
          status,
          message,
          data
        };
      }
      catch(error){
        const {data:{message},status}=error.response
        return {
            status,
            message,
        }
      }
          
    }
  