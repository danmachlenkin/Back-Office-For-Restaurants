import React from "react";

//CSS imports
import modules from "./Customer.module.css";

const Customer = (props) => {
  return (
    <div className={modules.productDiv}>
      <p>{props.name}</p>
      <p>{props.joinDate}</p>
      <p>{props.amountSpent}</p>
      <p>{props.transactionsAmount}</p>
    </div>
  );
};

export default Customer;
