import React from "react";
import './Expensedate.css';

const Expensedate = (props) => {
    const{date}=props;
    let d=new Date(date)
    
    const month = d.toLocaleString('en-Us', { month: 'long' });
    const day = d.toLocaleString('en-Us', { day: 'numeric' });
    const year = d.getFullYear();
    return (
        <div className="expense-date ">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
export default Expensedate;