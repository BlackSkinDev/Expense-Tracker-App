import '../styles/Expenses/ExpenseFilter.css'



const Expensefilter = (props)=> {


const options = [];
const selected =new Date().getFullYear();

options.push( <option value="all" key="all">All</option>)
for (var i = 2015; i <= (new Date().getFullYear());i++){
    options.push( <option value={i} key={i}>{i}</option>);
    
}


    return (
        <div className="filter-section">
             <div className="filter-heading"><strong>Filter by year</strong></div>
             <div className="filter-dropdown">
                <select defaultValue={selected} className="filter-select" onChange={props.onChangeFilter}>
                   {options}
                </select>
            </div>
          </div>
    )
}

export default Expensefilter
