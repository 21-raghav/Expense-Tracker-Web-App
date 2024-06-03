import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditable(false);
  };

  const startEditingHandler = () => {
    setIsEditable(true);
  };

  const stopEditingHandler = () => {
    setIsEditable(false);
  };
  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditable && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
