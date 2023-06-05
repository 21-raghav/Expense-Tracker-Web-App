import {useState} from 'react';

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Notebooks",
    amount: 180,
    date: new Date(2021, 7, 14),
  },
  { 
    id: "e2", 
    title: "New Earphones", 
    amount: 1599, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 1800,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Chair",
    amount: 3500,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "New Mobile",
    amount: 25000,
    date: new Date(2022, 8, 29),
  }
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteItemHandler = expenseId => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== expenseId);
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
