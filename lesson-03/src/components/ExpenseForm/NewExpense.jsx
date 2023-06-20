import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        }

        props.addExpenseData(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm
                saveExpenseData = {saveExpenseData}
            />
        </div>
    );
}


export default NewExpense;