import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const { expenses } = props;
  const [year, setYear] = useState("2020");
  const onDropdownSelectHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={year}
          onDropdownSelectHandler={onDropdownSelectHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
