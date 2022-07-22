import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [titleAdded, setTitleAdded] = useState("");
  const [dateAdded, setDateAdded] = useState(new Date());
  const [amountAdded, setAmountAdded] = useState("");

  const titleChangeEventHandler = (event) => {
    setTitleAdded(event.target.value);
  };
  const amountChangeEventHandler = (event) => {
    setAmountAdded(event.target.value);
  };
  const dateChangeEventHandler = (event) => {
    setDateAdded(event.target.value);
  };
  const formSubmitEventHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: titleAdded,
      amount: +amountAdded,
      date: new Date(dateAdded),
    };

    props.onSaveExpense(expenseData);
    setTitleAdded("");
    setAmountAdded("");
    setDateAdded("");

    props.CancelClickHandler();
  };
  return (
    <form onSubmit={formSubmitEventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeEventHandler}
            value={titleAdded}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeEventHandler}
            value={amountAdded}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeEventHandler}
            value={dateAdded}
          />
        </div>
      </div>
      <div className=".new-expense__actions">
        <button onClick={props.CancelClickHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
