import React from 'react'
import './ExpenseItem.css'
function ExpenseItem({expense,deleteExpenses}) {
  return (
    <div className='expense-item'>
      <button className='btn-item fas fa-trash' onClick={()=>deleteExpenses(expense.id)}></button>
      <div className='expense-detail'>
        <h3>{expense.title}</h3>
         <p className='amount'>{expense.amount} birr</p>
      </div>
      
        <p className='date'>{expense.date}</p>
      
      
    </div>
  )
}

export default ExpenseItem
