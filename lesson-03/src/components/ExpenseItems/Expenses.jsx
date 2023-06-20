import './Expenses.css';
import Card from "../../UI/Card";
import ExpenseFilter from "./expenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpnesesChart";

function Expenses(props) {
    const [filter, setFilter] = useState('2023');

    const onChangeFilterHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilter(selectedYear);
    }

    const filteredItems = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filter;
    })

    return (
        <Card className='expenses'>
            <ExpenseFilter
                onChangeFilter={onChangeFilterHandler}
                selected={filter}/>
            <ExpensesChart expenses={filteredItems} />
            <ExpensesList
                items={filteredItems}
            />
            {/*<ExpenseItem*/}
            {/*    id={props.items[0].id}*/}
            {/*    title={props.items[0].title}*/}
            {/*    amount={props.items[0].amount}*/}
            {/*    date={props.items[0].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    id={props.items[1].id}*/}
            {/*    title={props.items[1].title}*/}
            {/*    amount={props.items[1].amount}*/}
            {/*    date={props.items[1].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    id={props.items[2].id}*/}
            {/*    title={props.items[2].title}*/}
            {/*    amount={props.items[2].amount}*/}
            {/*    date={props.items[2].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    id={props.items[3].id}*/}
            {/*    title={props.items[3].title}*/}
            {/*    amount={props.items[3].amount}*/}
            {/*    date={props.items[3].date}*/}
            {/*/>*/}
        </Card>
    );
}

export default Expenses;