//Libraries Imports
import React, { Fragment } from "react";

//JS imports
import DailyChart from "../Components/Dashboard/DailyChart";
import MonthlyChart from "../Components/Dashboard/MonthlyChart";
import YearlyChart from "../Components/Dashboard/YearlyChart";


//CSS imports
import modules from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <Fragment>
      <div className={modules.container}>
        <DailyChart />
        <MonthlyChart />
      </div>
      <div className={modules.yearlyChart}>
        <YearlyChart />
      </div>
    </Fragment>
  );
};

export default Dashboard;
