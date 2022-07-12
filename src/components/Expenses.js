import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const { expenses } = props;
  return (
    <div className="expenses">
      <ExpenseItem
        amount={expenses[0].amount}
        title={expenses[0].title}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        amount={expenses[1].amount}
        title={expenses[1].title}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        amount={expenses[2].amount}
        title={expenses[2].title}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        amount={expenses[3].amount}
        title={expenses[3].title}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
