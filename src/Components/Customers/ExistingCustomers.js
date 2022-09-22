import React, { Fragment } from "react";

//JS imports

//CSS imports
import modules from './ExistingCustomers.module.css';

const ExistingCustomers = ()=> {
    
    return <Fragment>
        <h3>Existing Customers </h3>
        <input type="search" placeholder="Search for a customer" className={modules.searchInput}/>
        <button className={modules.addNewCustomerBtn}>Add New Customer</button>
        <button className={modules.deleteCustomerBtn}>Delete Existing Customer</button>
    </Fragment>
};


export default ExistingCustomers;