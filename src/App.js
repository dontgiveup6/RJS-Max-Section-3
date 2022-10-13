import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_EXPENSES = [
  { id: "e1", title: "Title 1", amount: 100, date: new Date(2021, 5, 12) },
  { id: "e2", title: "Title 2", amount: 2010, date: new Date(2022, 1, 12) },
  { id: "e3", title: "Title 3", amount: 250, date: new Date(2021, 8, 22) },
  { id: "e4", title: "Title 4", amount: 350, date: new Date(2019, 10, 22) },
  { id: "e5", title: "Title 5", amount: 1350, date: new Date(2022, 3, 22) },
  { id: "e6", title: "Title 6", amount: 2350, date: new Date(2022, 3, 10) },
  { id: "e7", title: "Title 7", amount: 220, date: new Date(2022, 7, 10) },
  { id: "e8", title: "Title 8", amount: 210, date: new Date(2022, 1, 10) },
  { id: "e9", title: "Title 9", amount: 3150, date: new Date(2022, 8, 10) },
  { id: "e10", title: "Title 10", amount: 17780, date: new Date(2022, 11, 10) },
  { id: "e11", title: "Title 11", amount: 1200, date: new Date(2022, 0, 10) },
];

const App = () => {
  const [expenses, setAllExpenses] = useState(INIT_EXPENSES);

  const addExpense = (newExpense) => {
    setAllExpenses((prevExpenses) => {
      const newExpenseData = {
        id: `e${prevExpenses.length + 1}`,
        ...newExpense,
        amount: +newExpense.amount,
        date: new Date(newExpense.date),
      };
      return [newExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveExpenseData={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
