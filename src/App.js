import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react"; // Optional to write.
import NewExpense from "./components/NewExpense/NewExpense";
import AddExpenses from "./components/NewExpense/AddExpenses";

const dummyExpenses = [
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
  const [expenses, setExpenses] = useState(dummyExpenses);
  const [showExpenseForm, setShowExpenseForm] = useState("0");
  const onReceivngExpenseData = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const AddExpensesClickHandler = (isClicked) => {
    setShowExpenseForm(isClicked);
  };

  const onReceivngCancelClickResponse = (isClicked) => {
    setShowExpenseForm(isClicked);
  };

  let expenseFormTabContent = (
    <div>
      <AddExpenses onAddExpensesClick={AddExpensesClickHandler} />
    </div>
  );

  if (showExpenseForm === "1") {
    expenseFormTabContent = (
      <div>
        <NewExpense
          onReceivingExpenseData={onReceivngExpenseData}
          sendCancelClickResponse={onReceivngCancelClickResponse}
        />
      </div>
    );
  }

  return (
    <div>
      {expenseFormTabContent}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;