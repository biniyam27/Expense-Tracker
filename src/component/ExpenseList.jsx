import React from 'react'
import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'
function ExpenseList({expenses,deleteExpenses}) {
  return (
    <div className='expense-list'>
      {expenses.length===0 ? (
        <p className='empty'>No expenses added.</p>
      ):
      <div className="list-container">
        {expenses.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpenses={deleteExpenses}
          />
        )
      )}
      </div>
        }
      
    </div>
  )
}

export default ExpenseList
