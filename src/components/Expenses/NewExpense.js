import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Expenses/NewExpense.css'
import ExpenseForm from './Forms/ExpenseForm'

const  NewExpense = (props)=> {

const [isEditing, setIsEditing] = useState(false);

const navigate = useNavigate();

const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData,
       
    }
    props.onAddExpense(expenseData)
    //setIsEditing(false);
}

  const startEditingHandler = () => {
    if (localStorage.getItem('token')) {
      setIsEditing(true);
    }
    else{
        alert("Please kindly create an account to manage your expenses!")
        navigate("/register")
    }
    
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };


  return (
    <div>
      <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
          errors={props.errors}
         
        />
      )}
    </div>
  </div>
       
  );
}

export default NewExpense;