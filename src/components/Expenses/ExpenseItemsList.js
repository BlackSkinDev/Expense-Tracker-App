import ExpenseItem from './ExpenseItem'
import '../styles/Expenses/ExpenseItemsList.css'

function ExpenseItemsList(props) {



if (props.expenses.length === 0) {
    return <div className="my-expenses"><h3 className="no-expense-header">Oops, Seems you have no expenses saved at this moment.</h3></div>
} 



  return (
          <>
            <ul className="expenses-list">
                {props.expenses.map((expense) =>
                    <ExpenseItem expense={expense} key={expense.id} />
                )}
            </ul>
          </>
     
  );
}

export default ExpenseItemsList;