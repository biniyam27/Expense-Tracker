import React from 'react'
import './ExpenseItem.css'
function ExpenseItem({expense,deleteExpenses}) {
  return (
    <div className='expense-item'>
      <button className='btn-item fas fa-trash' onClick={()=>deleteExpenses(expense.id)}></button>
      <div>
        <h3>{expense.title}</h3>
      </div>
      <div className="right">
        <p className='amount'>${expense.amount}</p>
        
      </div>
      
    </div>
  )
}

export default ExpenseItem
