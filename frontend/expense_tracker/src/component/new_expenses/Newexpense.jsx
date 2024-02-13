import React from 'react'
import Newexpenseform from './newexpenseform/Newexpenseform';
import {nanoid} from "nanoid";
import './Newexpense.css';
const Newexpense = (props) => {
    const {submitAction}=props;
    const onAddNewExpense=(expense)=>{
       
   
    const modified_expense={
        ...expense,
        id:nanoid(),
    }
    submitAction(modified_expense);
    } 
    
    return (
        <div className="new-expense">
            <Newexpenseform
            save={onAddNewExpense}/>
         {/* <Newexpenseform/> */}
        </div>
    )
}

export default Newexpense;