import React,{useState} from 'react';
import '../styles/Expenses/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import {FaTrash} from 'react-icons/fa';


const  ExpenseItem = (props)=> {
  
const deleteTaskHandler = (expenseId)=>{
  props.deleteExpense(expenseId)
}

  return (
    <li>
      <div className="expense-item">
          <ExpenseDate date={props.expense.date}></ExpenseDate>
          <div className="expense-item__description">
              <h2>{props.expense.title}</h2>
              <div className="expense-item__left">
                <FaTrash className="expense-delete-icon" onClick={e=>deleteTaskHandler(props.expense.id)}/>
                <div className="expense-item__price">${props.expense.amount}</div>
              </div>
          </div>
      </div>
    </li>
  );
}

export default ExpenseItem;