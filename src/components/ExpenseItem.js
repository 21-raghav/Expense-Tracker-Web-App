import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const deleteHandler = () => {
    props.onDeleteListItem(props.id);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹ {props.amount}</div>
        <button
          className="expense-item__button"
          type="button"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
