import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onExpenseSubmition }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const userInputHandler = (type, event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [type]: event.target.value,
      };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onExpenseSubmition(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={userInputHandler.bind(this, "title")}
            type="text"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={userInputHandler.bind(this, "amount")}
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={userInputHandler.bind(this, "date")}
            type="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
