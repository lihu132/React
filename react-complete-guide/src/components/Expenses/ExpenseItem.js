import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 5, 27);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  let title = props.title;

  const clickHandler = () => {
      title ='Updated!';
      console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick= {clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
