import React from 'react'
import './Newexpenseform.css';
import { useState } from 'react';
const Newexpenseform = (props) => {
    const {save}=props;
    const[title,setTitle]=useState('');
    const[amount,setAmount]=useState('');
    const[date,setDate]=useState('');

    const  onTitleChangehandler=(event)=>{
        setTitle(event.target.value)
    }
    const onAmountChangehandler=(event)=>{
        setAmount(event.target.value)
    }
    const onDateChangehandler=(event)=>{
        setDate(event.target.value)
    }
    const onSubmithandler=(event)=>{
       event.preventDefault();
       const new_expense={title,
                          amount,
                          date:new Date(date),}
       save(new_expense)
    }
  return (
    <div>
   
        {/* <form onSubmit={(event)=>{
            event.preventDefault();
            console.log('add expense form')}
        }> </form> */}
         <form onSubmit={onSubmithandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="expense_title">Title:</label>
                <input type="text" id="expense_title" name="title" onChange={onTitleChangehandler} value={title}/>
            </div>
            <div className='new-expense__control'>
                 <label htmlFor="expense_amount">Amount:</label>
                <input type="number" id="expense_amount" name="amount" min="0" max="1000" onChange={onAmountChangehandler}value={amount}/>
            </div>
            <div className='new-expense__control'>
                 <label htmlFor="expense_date">date:</label>
                <input type="date" id="expense_date" name="date" onChange={onDateChangehandler} value={date}/>
            </div>
            </div> 
    
        <div className='new-expense__actions'> 
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
        

        </form>
        </div>
  )
}

export default Newexpenseform