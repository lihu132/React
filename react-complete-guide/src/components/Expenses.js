import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.all[0].title}
        amount={props.all[0].amount}
        date={props.all[0].date}
      />
      <ExpenseItem
        title={props.all[1].title}
        amount={props.all[1].amount}
        date={props.all[1].date}
      />
      <ExpenseItem
        title={props.all[2].title}
        amount={props.all[2].amount}
        date={props.all[2].date}
      />
      <ExpenseItem
        title={props.all[3].title}
        amount={props.all[3].amount}
        date={props.all[3].date}
      />
    </div>
  );
}

export default Expenses;
