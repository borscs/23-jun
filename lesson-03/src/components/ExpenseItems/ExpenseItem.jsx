import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 6, 2);
    // const expenseTitle = 'Book';
    // const expensePrice = 520;
    return (
        <div className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}Ft</div>
            </div>
        </div>
    )
}

export default ExpenseItem;