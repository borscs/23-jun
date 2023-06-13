import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     price: '',
    //     date: '',
    // });
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({title: event.target.value});
        // console.log(userInput);
    };
    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });
        //
        // setPrice((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })
        //
        // console.log(userInput);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            price: price,
            date: date,
        };

        console.log(expenseData);

        setPrice('');
        setTitle('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                           value={title}
                           onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number'
                           value={price}
                           min='0.01'
                           max='99'
                           onChange={priceChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='number'
                           min='2010-01-01'
                           value={date}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;