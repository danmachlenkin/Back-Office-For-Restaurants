import React from "react";

//JS imports
import Card from "../UI/Card";
//CSS imports
import modules from "./CustomersList.module.css";

const CustomersList = () => {
  return (
    <div className={modules.contentWrapper}>
        <div className={modules.tableAttributes}>
            <p>Full Name</p>
            <p>Join Date</p>
            <p>Amount Spent</p>
            <p>Transactions Amount </p>
        </div>
      <ul>
        <li>Humus</li>
        <li>Shawarma</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Salad</li>
        <li>Frutis</li>
        <li>Drinks</li>
      </ul>
    </div>
  );
};

export default CustomersList;
