import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    const onAddExpense = (expenseData)=>{
        const data = {
            ...expenseData,
            id: parseInt(Math.random() * 1000)
        }
        props.onReceivingExpenseData(data);
    }

    const cancelClickResponse = (isClicked)=>{
        props.sendCancelClickResponse(isClicked);
    }

  return <div className='new-expense'>
      <ExpenseForm onSaveExpense = {onAddExpense} onCancelClick = {cancelClickResponse}/>
  </div>;
}

export default NewExpense;