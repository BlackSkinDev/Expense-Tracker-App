import React,{useState,useEffect} from 'react';
import ExpenseItemsList from './ExpenseItemsList';
import NewExpense from './NewExpense';
import ExpenseFilter from './ExpenseFilter';
import  {computeFilteredExpenses,getAllExpenses,saveExpense,deleteExpense} from '../services/ExpenseService';
import ExpensesChart from './ExpensesChart';
import {useNavigate } from "react-router-dom";
import LogoutButton from '../Auth/Buttons/LogoutButton'



const Expenses = ()=> {

  const navigate = useNavigate();
 
  const [expenses, setExpenses] = useState([])

  const [filteredExpenses,setFilteredExpenses] = useState(expenses)

  const [isLoading,setIsLoading] = useState(true)

  const [errors,setErrors] = useState([])

 
  
  

  const addExpenseHandler =async (expense) => { 

    const response =  await saveExpense(expense)
    

    if (response.status ==='error') {
      setErrors(previousErrors=>{
        return[...response.data]
      });
    }

     if (response.status ==='success') {
        alert(response.message);
       window.location.reload();
      //   setExpenses(previousExpenses=>{
      //       return[ response.data, ...previousExpenses]
      //   });
      //   setFilteredExpenses(previousFilteredExpenses=>{
      //      return[response.data, ...filteredExpenses]
      //  });
     }      
  }

  const deleteExpenseHandler = async(expenseId)=>{
    
    if(window.confirm('Delete Expense?')){
        const response = await deleteExpense(expenseId);

       if(response.status ===401){
        localStorage.removeItem('isLoggedIn')
        navigate('/login',{state:{msg:'Your session has expired, Please Login again.'}});
       }
        
        if(response.status ==='success'){
          alert(response.message);
          window.location.reload();
        }
    }

  }

  const onChangeFilterHandler = (e) => {
    if (e.target.value === 'all') {
        setFilteredExpenses(previousFilteredExpenses=>{
            return[...expenses]
        });
    }
    else{
      const filteredExpenses = computeFilteredExpenses(expenses,e.target.value);      
        setFilteredExpenses(previousFilteredExpenses=>{
          return[...filteredExpenses]
       });
      
    }
  }

  useEffect(() => {
    const token  = localStorage.getItem('token')
    const isLoggedIn  = localStorage.getItem('isLoggedIn')
    if (!token){
      navigate('/login',{state:{msg:'Please login to manage your expenses!'}});
    }
    else if(!isLoggedIn){
      navigate('/login',{state:{msg:'Your session has expired, Please Login again.'}});
    }
    else{
        const fetchUserExpenses = async () => {
          const response = await getAllExpenses()
          if (response.status===401) {
                localStorage.removeItem('isLoggedIn')
                navigate('/login',{state:{msg:'Your session has expired, Please Login again.'}});
          }
          setIsLoading(false);
        
          setExpenses(previousExpenses=>{
              return[...response.data]
          });
        
          setFilteredExpenses(previousFilteredExpenses=>{
            return[...response.data]
          });   
          }        
          fetchUserExpenses()
        }
  
      }, [navigate]); // Only re-run the effect if count changes

  
  return (
    <div>
        <h1 className="head">Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler}  errors={errors}  />
            <div className="my-expenses">
            {isLoading ? <h1 style={{textAlign: 'center',color: 'white'}}>Please wait...</h1>:
              (<>
               <LogoutButton/>
              <ExpenseFilter  onChangeFilter={onChangeFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseItemsList expenses={filteredExpenses} deleteExpense={deleteExpenseHandler}  />
                </>)}
            </div>                               
        </div>
  );
}
export default Expenses;
















