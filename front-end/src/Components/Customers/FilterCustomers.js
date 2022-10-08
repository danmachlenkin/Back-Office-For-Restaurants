import React, { Fragment } from "react";

//JS imports

//CSS imports
import modules from "./FilterCustomers.module.css";

const FilterCustomers = () => {
  return (
    <div>
      <div>
        <h3>Existing Customers </h3>
        <input
          type="search"
          placeholder="Search customer name"
          className={modules.searchInput}
        />
        <select className={modules.selectInput}>
          <option>Newest Customers</option>
          <option>Oldest Customers</option>
          <option>Top Paying</option>
        </select>
        <div>
          <button className={modules.addNewCustomerBtn}>
            Add New Customer
          </button>
          <button className={modules.deleteCustomerBtn}>
            Delete Existing Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCustomers;
