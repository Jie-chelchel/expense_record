import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenxe/NewExpense";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  const newdata = (expense) => {
    console.log(expense);
    setExpenses((preExpense) => {
      setExpenses((prevExpenses) => {
        console.log(prevExpenses);
        return [expense, ...prevExpenses];
      });
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveNewData={newdata} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
