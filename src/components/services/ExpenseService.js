export const computeFilteredExpenses = (expenses,year) =>{
   let res = [];
   expenses.forEach(exp=>{
       if(Number(new Date(exp.date).getFullYear())=== Number(year)){
            res.push(exp);
       }
   })
   return res;
}