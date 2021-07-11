import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveEnteredData = (enteredData) => {
    const newexpenseData = { ...enteredData };
    console.log("hhhh", newexpenseData);
    props.onSaveNewData(newexpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveEnteredData} />
    </div>
  );
};

export default NewExpense;
