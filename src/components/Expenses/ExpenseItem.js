import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const { title, amount } = props;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__h2">{title}</h2>
        <Card className="expense-item__price">{"INR " + amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
