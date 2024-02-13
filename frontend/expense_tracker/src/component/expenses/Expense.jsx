import React from 'react';
import './Expense.css';
import Expenselist from './expenselist/Expenselist';
const Expense=(props)=>{
    const{expense=[]}=props;
 return (
    <div className='expenses'>
        <Expenselist expense={expense}/>
    </div>

 )
}
export default Expense