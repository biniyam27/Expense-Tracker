import { button } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm({addExpense,setIsForm}) {
  const [title,setTitle]=useState("");
  const [amount,setAmount]=useState("");
  const [catagory,setCatagory]=useState("");
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(!title || !amount || !catagory) 
      return;
    setIsForm(false);
    const newExpense={
      id:Date.now(),
      title,
      amount,
      catagory,
      date:new Date().toLocaleDateString(),
    }
    addExpense(newExpense);
    setTitle("");
    setAmount("");
    setCatagory("");
    console.log("Submitted")
  }
  return (
    <>
    <button className='btn-back fas fa-arrow-left' onClick={()=>setIsForm(false)}></button>
    <div className="form-container">
       <form className='expense-form' 
    onSubmit={handelSubmit}>

      <input type="text"
      placeholder='Expense title'
      value={title}
      maxLength={30}
      onChange={(e)=>{
        setTitle(e.target.value)
       
      }}
      />
      <div className="input-container">
        <input type="number"
      placeholder='Amount'
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      />
      <select className='select-container' value={catagory} onChange={(e)=>setCatagory(e.target.value)}>
        <option value="">Select catagory</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      </div>
      
      <button className='btn-addexpense' type='submit'>Add Expense</button>
    </form>
    </div>
    
    </>
  )
}

export default ExpenseForm
