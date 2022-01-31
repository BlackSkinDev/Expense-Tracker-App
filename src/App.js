import React,{useState} from 'react';
import './App.css';
import ExpenseItemsList from './components/Expenses/ExpenseItemsList';
import NewExpense from './components/Expenses/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import  {computeFilteredExpenses} from './components/services/ExpenseService';


const all_expenses = [
  {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: '2020-01-09',
  },
  { 
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: '2020-01-15'},
  {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: '2021-01-19',
  },
  {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: '2022-01-25',
  },
  {
    id: 'e5',
    title: 'New Desk ',
    amount: 450,
    date: '2019-01-25',
},
];


const App = ()=> {
 
  const [expenses,setExpenses] = useState(all_expenses);
  const [filteredExpenses,setFilteredExpenses] = useState(expenses)



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

  
  return (
    <div>
        <h1 className="head">Expense Tracker</h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <div className="my-expenses">
          <ExpenseFilter  onChangeFilter={onChangeFilterHandler}/>
          <ExpenseItemsList expenses={filteredExpenses}/>   
        </div>   
    </div>
  );
}
export default App;





















