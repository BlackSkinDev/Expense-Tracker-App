import React,{useState} from 'react';
import '../../styles/Expenses/ExpenseForm.css'
const Expenseform = (props)=> {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    
    const titleHandler = (e)=>{
        setTitle(e.target.value)
        
    }
    const amountHandler = (e)=>{
        setAmount(e.target.value)
    }
    const dateHandler = (e)=>{
        setDate(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        const expenseData={
            title:title,
            amount:amount,
            date:new Date(date),
        }
        props.onSaveExpenseData(expenseData)
        setDate('')
        setTitle('')
        setAmount('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title}  onChange={titleHandler} required />
                </div>
                
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount}  min="0.01" step="0.01" onChange={amountHandler} required />
                </div>

                 <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateHandler} required />
                </div>
            </div>
            
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}


export default Expenseform