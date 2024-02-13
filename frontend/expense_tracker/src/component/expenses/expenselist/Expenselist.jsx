import React from "react";
import './Expenselist.css';
import Expenseitem from "../expenseitem/expenseitem";
const Expenselist=(props)=>{
    const{expense=[]}=props;
    if(expense.length==0){
        return(<h2>no expenses founded</h2>)
        
    }
    return(
        
        <ul className="expenses-list ">
            {expense.map((each_expense)=>{
            return (
            <Expenseitem 
            key={each_expense.id||each_expense._id}
            title={each_expense.title}
            amount={each_expense.amount}
            date={each_expense.date}
            />
                )
            
            })}
        </ul>
    )
}
export default Expenselist