import React, { Fragment } from "react";

//JS imports


//CSS imports
import modules from './Reports.module.css';

const Reports = () => {
    
    return <Fragment>
        <div>
            <h4>Please Select The Type Of Report You Would Like To Download</h4>
            <select>
                <option value="transactionsHistory">Transactions History</option>
                <option value="accountentReport">Accountent Report</option>
                <option value="timeClock">Employees Time Clock</option>
            </select>
        </div>
        <div>
            {/* <TimeRange /> */}
        </div>
        <button>Download!</button>
    </Fragment>

};

export default Reports;