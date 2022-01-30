/* eslint-disable array-callback-return */
import React from 'react';
import ExpenseItem from './ExpenseItem'
import '../styles/ExpenseItemsList.css'

function ExpenseItemsList(props) {

const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    ];


  return (
      <div className="my-expenses">
          {expenses.length ? 
            expenses.map((expense,idx) =>
            <ExpenseItem expense={expense} key={idx} />
        ) :
            <h1>Oops, Seems you have no expenses saved at this moment.</h1>  
         }
      </div>
  );
}

export default ExpenseItemsList;