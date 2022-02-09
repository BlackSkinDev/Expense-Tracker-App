import React,{useState,useEffect} from 'react';
import ExpenseItemsList from './ExpenseItemsList';
import NewExpense from './NewExpense';
import ExpenseFilter from './ExpenseFilter';
import  {computeFilteredExpenses,getAllExpenses} from '../services/ExpenseService';
import ExpensesChart from './ExpensesChart';
import {useNavigate } from "react-router-dom";
import LogoutButton from '../Auth/Buttons/LogoutButton'



const all_expenses = [
  { 
    id: 1,
    title: 'New TV',
    amount: 799.49,
    date: '2022-02-15'},
  {
      id: 2,
      title: 'Car Insurance',
      amount: 294.67,
      date: '2021-01-19',
  },
  {
      id: 3,
      title: 'New Desk (Wooden)',
      amount: 450,
      date: '2022-01-25',
  },
];


const Expenses = ()=> {

  const navigate = useNavigate();
 
  const [expenses, setExpenses] = useState([])

  const [filteredExpenses,setFilteredExpenses] = useState(expenses)

  const [isLoading,setIsLoading] = useState(true)
  

  const addExpenseHandler = (expense) => { 
      setExpenses(previousExpenses=>{
         return[ expense, ...previousExpenses]
      });
      setFilteredExpenses(previousFilteredExpenses=>{
        return[expense, ...filteredExpenses]
      });

      
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

      const fetchUserExpenses = async () => {
          const response = await getAllExpenses()
            if (response.status===401) {
                alert("You session has expired, Please Login again.");
                navigate('/login');
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
     
  }, [navigate]); // Only re-run the effect if count changes

  
  return (
    <div>
        <h1 className="head">Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
            <div className="my-expenses">
            {isLoading ? <h1 style={{textAlign: 'center',color: 'white'}}>Please wait...</h1>:
              (<><ExpenseFilter  onChangeFilter={onChangeFilterHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseItemsList expenses={filteredExpenses}/>
                <LogoutButton/>
                </>)}
            </div>                               
        </div>
  );
}
export default Expenses;
















