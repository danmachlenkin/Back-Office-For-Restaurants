import React, { Fragment } from "react";
import CustomersList from "../Components/Customers/CustomersList";

//JS imports
import FilterCustomers from "../Components/Customers/FilterCustomers";
//CSS imports

const Customers = () => {
    
    return <Fragment>
        <FilterCustomers/>
        <CustomersList />
    </Fragment>
};


export default Customers;