import './ExpenseForm.css';
import './NewExpense.css';

const AddExpenses = (props)=>{
    const onClickHandler = () =>{
        props.onAddExpensesClick("1");
    }
    return (
        <div className='new-expense'>
            <button onClick={onClickHandler}>
                Add New Expense
            </button>
        </div>
    )
}

export default AddExpenses;