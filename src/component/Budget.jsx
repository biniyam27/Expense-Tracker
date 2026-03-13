import React from 'react'

function Budget({budget,setBudget,spent}) {
    const remaining=budget-spent;
    const percent=budget? (spent/budget)*100:0;
  return (
    <div className='budget'>
      <input type="number"
      placeholder='Set monthly budget'
      onChange={(e)=>setBudget(Number(e.target.value))}
      />
      <div className="summary">
        <p>Budget:{budget}birr</p>
        <p>Spent: {spent}birr</p>
        <p>Remaining:{remaining}birr</p>
      </div>
      <div className="progress">
        <div className='bar'
        style={{width:percent+ "%"}}
        />
      </div>
    </div>
  )
}

export default Budget
