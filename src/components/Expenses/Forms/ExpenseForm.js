import React,{useState} from 'react';
import '../../styles/Expenses/ExpenseForm.css'
const Expenseform = (props)=> {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    const [isSaving,setIsSaving] = useState(false)
    
    const errors =props.errors;
    
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
        setIsSaving(true)
        e.preventDefault()
        const expenseData={
            label:title,
            amount:amount,
            date:date,
        }
        props.onSaveExpenseData(expenseData)
        // if(errors.length<1){
        //     setDate('')
        //     setTitle('')
        //     setAmount('')
        // }
      
      
    }

    return (
        <>
        <div className="error-div">
        <ul className="error-lists">
        {errors.length>0 &&errors.map(err=>{
            return <li key={err}>{err}</li>
        })}
        </ul>
    </div> 
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
                <button type="submit" disabled={isSaving}>{!isSaving ?'Add Expense':'Saving Expense'}</button>
            </div>

        </form>
        </>
    )
}


export default Expenseform