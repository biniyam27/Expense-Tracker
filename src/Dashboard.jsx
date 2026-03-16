import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import { useState, useEffect } from "react";
import Chart from "./component/Chart";
import '.fontawesome-free-6.6.0-web/css/fontawesome.min.css';
import '.fontawesome-free-6.6.0-web/css/all.min.css';
import './App.css';
import Footer from "./component/Footer";

function Dashboard() {
    const [isForm, setIsForm] = useState(false);
    const [isBudget,setIsBudget]=useState(false);
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });
    const [budget, setBudget] = useState(()=>{
        const saved=localStorage.getItem("budget");
        return saved ? Number(saved):0;
    });
    const [inputBudget,setInputBudget]=useState();
    useEffect(() => {
        const savedBudget = localStorage.getItem("budget");
        if (savedBudget) {
            setBudget(Number(savedBudget));
        }
    }, []); 
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
        localStorage.setItem("budget", budget);
        
       
    }, [expenses, budget]);
     const spent = expenses.reduce((acc, item) => acc + Number(item.amount), 0);
     const remaining=budget-spent;
    const addExpenses = (expense) => {
        setExpenses([...expenses, expense]);
        console.log("Added:", expense);
    };

    const deleteExpenses = (id) => {
        setExpenses(expenses.filter((e) => e.id !== id));
    };
    const handelSubmit=(e)=>{
        e.preventDefault();
         if(!inputBudget) 
         return;
        setIsBudget(false);
        setBudget(Number(inputBudget));
        localStorage.setItem("budget",inputBudget);
        setInputBudget(0);
    }
    return (
        <>
            {isForm ? (
                <div className="container expense-form-container">
                    <div className="page">
                      <ExpenseForm
                        addExpense={addExpenses}
                        setIsForm={setIsForm}
                    />
                    </div>
                    
                    <Footer/>
                </div>
            ) : (
              <>
                {isBudget?(
            <div className='container budget-container'>
                <div className="page">
                    <button className='btn-back fas fa-arrow-left' onClick={()=>setIsBudget(false)}></button>
                <div className=" form-container">
                   <form onSubmit={handelSubmit} className='budget-form expense-form'>
                <input type="number"
                placeholder='Set monthly budget'
                value={inputBudget}
                onChange={(e)=>setInputBudget(Number(e.target.value))}
                  />
                  <button className='btn-addexpense' type="submit">Set Budget</button>
             </form>
                </div>
             
                 <div className="summary">
                    <Chart budget={budget} spent={spent} />
              </div>
            </div>
                
      <Footer/>
    </div>):(
      <div className="container home-container">
            <div className="page">
                <div className="header">
                        <div className="nav">
                            <h1 className="title">Expense Tracker</h1>
                            <button className="btn-budget" onClick={()=>setIsBudget(true)}>Budget Reviews</button>
                        </div>
                        
                        <div className="total-box">
                            <h2>{remaining}birr</h2>
                        </div>
                    </div>
                    <ExpenseList
                        expenses={expenses}
                        deleteExpenses={deleteExpenses}
                    />
                    <button className="btn-add" onClick={() => setIsForm(true)}>+</button>
            </div>
                    
                    <Footer/>
                </div>

    )}
                
           </> )}

          
        </>
    );
}

export default Dashboard;
