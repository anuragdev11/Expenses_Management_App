import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [enableEditForm, setEnableEditForm] = useState(false);
  const onAddExpense = (expenseData) => {
    const data = {
      ...expenseData,
      id: parseInt(Math.random() * 1000),
    };
    props.onReceivingExpenseData(data);
  };

  const EditFormClickHandler = () => {
    setEnableEditForm(true);
  };

  const CancelClickHandler = () => {
      setEnableEditForm(false);
  }

  return (
    <div className="new-expense">
      {!enableEditForm && (
        <button onClick={EditFormClickHandler}>Add New Expense</button>
      )}
      {enableEditForm && <ExpenseForm onSaveExpense={onAddExpense} CancelClickHandler={CancelClickHandler}/>}
    </div>
  );
}

export default NewExpense;
