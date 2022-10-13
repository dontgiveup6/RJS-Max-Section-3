import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveExpenseData }) => {
  const [isAdding, setIsAdding] = useState(false);

  const expenseSubmition = (submitedExpenseData) => {
    onSaveExpenseData(submitedExpenseData);

    toggleIsAdding();
  };

  const toggleIsAdding = () => {
    setIsAdding((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!isAdding && <button onClick={toggleIsAdding}>Add New Expense</button>}
      {isAdding && (
        <ExpenseForm
          onCancelHandler={toggleIsAdding}
          onExpenseSubmition={expenseSubmition}
        />
      )}
    </div>
  );
};

export default NewExpense;
