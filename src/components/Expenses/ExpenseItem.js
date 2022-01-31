import React,{useState} from 'react';
import '../styles/Expenses/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'


const  ExpenseItem = (props)=> {
  
  return (
    <li>
      <div className="expense-item">
          <ExpenseDate date={props.expense.date}></ExpenseDate>
          <div className="expense-item__description">
              <h2>{props.expense.title}</h2>
              <div className="expense-item__price">${props.expense.amount}</div>
          </div>
      </div>
    </li>
  );
}

export default ExpenseItem;