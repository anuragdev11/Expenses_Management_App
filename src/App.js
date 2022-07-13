import Expenses from "./components/Expenses/Expenses";
//import react from "react";

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!!</p>
      <Expenses expenses={expenses} />
    </div>
  );

  // Under the hood code for above JSX Format.
  // return react.createElement(
  //   "div",
  //   {},
  //   react.createElement("h2", {}, "Let's get started!"),
  //   react.createElement("p", {}, "This is also visible!!"),
  //   react.createElement(Expenses, {expenses: expenses})
  // );
}

export default App;
