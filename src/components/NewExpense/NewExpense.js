import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSaveExpenseData }) => {
  const expenseSubmition = (submitedExpenseData) => {
    const newExpenseData = {
      id: Math.random().toString(),
      ...submitedExpenseData,
      amount: parseInt(submitedExpenseData.amount),
      date: new Date(submitedExpenseData.date),
    };

    onSaveExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmition={expenseSubmition} />
    </div>
  );
};

export default NewExpense;
