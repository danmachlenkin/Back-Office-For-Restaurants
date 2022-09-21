//Libraries Imports
import React, { Fragment, PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "../UI/Card";

//JS imports

//CSS imports
import modules from './DailyChart.module.css';


const DailyChart = () => {
  const data = [
    { name: "Cash", uv: 1500 },
    { name: "Credit Cards", uv: 2000 },
    { name: "Wolt", uv: 750 },
    { name: "10Bis", uv: 500 },
  ];

  return (
    <Fragment>
      <div className={modules.wrapper}>
        <p>Daily Sales</p>
        <BarChart width={400} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" barSize={30} fill="#8884d8" />
        </BarChart>
      </div>
    </Fragment>
  );
};

export default DailyChart;
