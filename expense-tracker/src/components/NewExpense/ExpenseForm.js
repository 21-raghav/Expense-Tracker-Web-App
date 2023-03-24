import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle, setTitleHamdler] = useState('');
    const[enteredAmount, setAmountHamdler] = useState('');
    const[enteredDate, setDateHamdler] = useState('');

    const titleChangeHandler = event => {
        setTitleHamdler(event.target.value);
    };

    const amountChangeHandler = event => {
        setAmountHamdler(event.target.value);
    };

    const dateChangeHandler = event => {
        setDateHamdler(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
        setTitleHamdler('');
        setAmountHamdler('');
        setDateHamdler('');
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="1" step="1" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;