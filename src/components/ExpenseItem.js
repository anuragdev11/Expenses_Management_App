import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const {title, amount} = props;
    
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 className="expense-item__h2">{title}</h2>
        <div className="expense-item__price">{'INR ' + amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
