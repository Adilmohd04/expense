import React from "react";
import './Expenseitem.css';
import {useState} from 'react';

import Expensedate from "../expensedate/expensedate";
const Expenseitem = (props) => {
    // console.log('expenseitem',props);
    const {title,amount,date}=props;
 
    // let[ mod_tit,setMod_tit]= useState(title);
    // const handleClick = () => {
    //     setMod_tit("updated");
    //     console.log(mod_tit);
    //   }
    return (
        <li>
        <div className="expense-item">
        <Expensedate date={date}/>
            <div className="expense-item__description">
            <h3>{title}</h3>
            
            <div className="expense-item__price">


                ${amount}
            </div>
            
            </div>
            
            {/* <button onClick={handleClick()}>update</button> */}
        </div>
        </li>
    
    )
}
export default Expenseitem