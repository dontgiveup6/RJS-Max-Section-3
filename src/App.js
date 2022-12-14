import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Title 1', amount: 100, date: new Date(2021, 5, 12) },
    { id: 'e2', title: 'Title 2', amount: 2010, date: new Date(2022, 1, 12) },
    { id: 'e3', title: 'Title 3', amount: 250, date: new Date(2021, 8, 22) },
    { id: 'e4', title: 'Title 4', amount: 350, date: new Date(2017, 10, 22) },
  ];
  return (
    <div>
      <h1>Hello</h1>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
