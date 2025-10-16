import ExpenseForm from "./component/ExpenseForm"
import ExpenseList from "./component/ExpenseList"
import { useState,useEffect } from "react"
import './fontawesome-free-6.6.0-web/css/fontawesome.min.css'
import './fontawesome-free-6.6.0-web/css/all.min.css'
import './App.css'
function Dashboard () {
const [isForm,setIsForm]=useState(false);
const [expenses,setExpenses]=useState(()=>{
  const saved=localStorage.getItem("expenses");
  return saved ? JSON.parse(saved):[];

})
 const [total,setTotal]=useState(0);
 useEffect(()=>{
  localStorage.setItem("expenses",JSON.stringify(expenses));
  const sum=expenses.reduce((acc,item)=>
    acc + Number(item.amount),0)
  setTotal(sum);
 },[expenses])
 const addExpenses=(expense)=>{
  setExpenses([...expenses,expense])
  console.log("Added:",expense)
 }
 const deleteExpenses=(id)=>{
  setExpenses(expenses.filter((e)=>e.id!==id));
 }
 return (
    <>
    {isForm ? <div className="container">
      <ExpenseForm
     addExpense={addExpenses}
     setIsForm={setIsForm}
     />
      </div>
     :
    <div className="container">
      <div className="header">
      <h1 className="title">Expense Tracker</h1>
      <div className="total-box">
        <h2>${total}</h2>
      </div>
      </div>
     
     
     <ExpenseList
     expenses={expenses}
     deleteExpenses={deleteExpenses}
     />
     <button className="btn-add" onClick={()=>setIsForm(true)}>+</button>
    </div>
}
    </>
  )
}

 

export default Dashboard