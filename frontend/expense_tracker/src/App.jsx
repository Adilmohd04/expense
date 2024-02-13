import {useEffect, useState } from 'react'

import './App.css'
import Expenseitem from './component/expenses/expenseitem/expenseitem'
import Expenselist from './component/expenses/expenselist/Expenselist';
import Expense from './component/expenses/expense';
import Newexpense from './component/new_expenses/newexpense';
import { getAllExpense ,addExpense} from './api';

function App() {

 
  const [expense,setExpense]=useState([]);
  useEffect(()=>{
    getAllExpense(setExpense);
    
  },[])
 

 
const onAddNewExpenseItem=(expense)=>{
  console.log('Appjs',expense);
  addExpense(expense,()=>{
  setExpenses((previous_expense)=>{
    return[...previous_expense,expense];
  })

  console.log('adil',);
})
}
  return (
    <div >
    </div>
  )
}

export default App
