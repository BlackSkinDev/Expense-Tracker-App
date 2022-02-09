
import Chart from '../Charts/Chart';


const  ExpensesChart  = (props) => {
const chartDataPoints = [
    {label: 'Jan', value:0},
    {label: 'Feb', value:0},
    {label: 'Mar', value:0},
    {label: 'Apr', value:0},
    {label: 'May', value:0},
    {label: 'Jun', value:0},
    {label: 'Jul', value:0},
    {label: 'Aug', value:0},
    {label: 'Sep', value:0},
    {label: 'Oct', value:0},
    {label: 'Nov', value:0},
    {label: 'Dec', value:0},
];

if(props.expenses.length === 0){
    return <></>
}

for(const expense of props.expenses){
    const expenseMonth = (new Date(expense.date)).getMonth();
    chartDataPoints[expenseMonth].value+=expense.amount;

}
    

    return <div style={{marginTop:'20px'}}><Chart dataPoints= {chartDataPoints}/></div>
       
    
}

export default ExpensesChart