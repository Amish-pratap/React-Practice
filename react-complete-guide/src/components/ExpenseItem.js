import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>car Insurance</h2>
        <div className="expense-item__price"> $294.57</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
