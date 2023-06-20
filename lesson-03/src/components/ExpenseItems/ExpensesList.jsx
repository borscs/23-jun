import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    console.log(props);
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Not Found Expenses</h2>
    }
    return(
        <div>
        {props.items.map((item) =>(
                <ExpenseItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    )
};

export default ExpensesList;