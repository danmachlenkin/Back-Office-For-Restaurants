import React from "react";

//JS imports
import Card from "../UI/Card";
import Customer from "./Customer";
//CSS imports
import modules from "./CustomersList.module.css";


const DUMMY_DATA_CUSTOMERS = [
  {
    name: "Dan Machlenkin",
    joinDate: "01/01/2022",
    amountSpent: 1500,
    transactionsAmount: 5,
  },
  {
    name: "Barak Gatenio",
    joinDate: "01/01/2022",
    amountSpent: 500,
    transactionsAmount: 1,
  },
  {
    name: "Shahar Elimelech",
    joinDate: "01/01/2022",
    amountSpent: 7729,
    transactionsAmount: 13,
  },
  {
    name: "נדב קינן",
    joinDate:"01/01/2022",
    amountSpent: 150,
    transactionsAmount: 2,
  },
  {
    name: "דור ריבר",
    joinDate: "01/01/2022",
    amountSpent: 3570,
    transactionsAmount: 7,
  },
];

const CustomersList = () => {
  return (
    <div className={modules.contentWrapper}>
      <div className={modules.tableAttributes}>
        <p>Full Name</p>
        <p>Join Date</p>
        <p>Amount Spent</p>
        <p>Transactions Amount </p>
      </div>
      <div>
        {DUMMY_DATA_CUSTOMERS.map((customer) => (
          <Customer
            name={customer.name}
            joinDate={customer.joinDate}
            amountSpent={customer.amountSpent}
            transactionsAmount={customer.transactionsAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomersList;
