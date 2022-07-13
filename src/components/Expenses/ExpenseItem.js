import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const { title, amount } = props;
  const [titleText, setTitleText] = useState(title);

  const clickEventHandler = () => {
    setTitleText("Text Changed Successfully!!");
    console.log(titleText);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__h2">{titleText}</h2>
        <Card className="expense-item__price">{"INR " + amount}</Card>
      </div>
      <button onClick={clickEventHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
