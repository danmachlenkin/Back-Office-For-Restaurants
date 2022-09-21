//Libraries Imports
import React, { Fragment, PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//JS imports

//CSS imports
import modules from './YearlyChart.module.css';

const YearlyChart = () => {
  const data = [
    { name: "Jan", income: 30000 },
    { name: "Feb", income: 35000 },
    { name: "March", income: 27000 },
    { name: "Apr", income: 32000 },
    { name: "May", income: 34000 },
    { name: "June", income: 44000 },
    { name: "July", income: 39000 },
    { name: "Aug", income: 52000 },
    { name: "Sep", income: 55000 },
    { name: "Oct", income: 39000 },
    { name: "Nov", income: 35000 },
    { name: "Dec", income: 32000 },
  ];

  return (
    <Fragment>
      <div className={modules.wrapper}>
        <p>Yearly Gross Income</p>
        <LineChart
          width={800}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            strokeWidth="5"
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </Fragment>
  );
};

export default YearlyChart;
