//Libraries Imports
import React, { Fragment, PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

//JS imports

//CSS imports
import modules from "./MonthlyChart.module.css";

const MonthlyChart = () => {
  const data = [
    { name: "Cash", uv: 1500 },
    { name: "Credit Cards", uv: 2000 },
    { name: "Wolt", uv: 750 },
    { name: "10Bis", uv: 500 },
  ];

  return (
    <Fragment>
      <div className={modules.wrapper}>
        <p>Monthly Sales</p>
        <div className={modules.chart}>
          <BarChart width={500} height={200} data={data}>
            <XAxis dataKey="name" tick={{ fill: "black" }} />
            <YAxis tick={{ fill: "black" }} />
            <Bar dataKey="uv" barSize={30} fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </Fragment>
  );
};

export default MonthlyChart;
