import { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e01",
    title: "Notebooks",
    amount: 180,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e02",
    title: "Earphones",
    amount: 1599,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e03",
    title: "Bike Insurance",
    amount: 1800,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e04",
    title: "New Chair",
    amount: 3500,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e05",
    title: "New Mobile",
    amount: 25000,
    date: new Date(2022, 8, 29),
  },
];

function App() {
  // to check if local storge has an expense list
  let initialExpenses;
  if (localStorage.getItem("expense_list") !== null) {
    initialExpenses = JSON.parse(localStorage.getItem("expense_list"));
    initialExpenses.map((expense) => (expense.date = new Date(expense.date)));
  } else initialExpenses = DUMMY_EXPENSE;

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    localStorage.setItem(
      "expense_list",
      JSON.stringify([expense, ...expenses])
    );
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
    localStorage.setItem(
      "expense_list",
      JSON.stringify(expenses.filter((expense) => expense.id !== expenseId))
    );
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteItem={deleteExpenseHandler} />
    </div>
  );
}

export default App;
