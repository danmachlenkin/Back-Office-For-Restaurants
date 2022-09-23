//Libraries Imports
import React, { Fragment, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

//JS imports

//CSS imports
import modules from "./DailyChart.module.css";

const DailyChart = () => {
  const [displayedSalesData, setDisplayedSalesData] = useState("Graph");

  const changeDataViewHandler = (e) => {
    setDisplayedSalesData(e.target.innerText);
  };

  const data = [
    { name: "Cash", uv: 1500 },
    { name: "Credit Cards", uv: 2000 },
    { name: "Wolt", uv: 750 },
    { name: "10Bis", uv: 500 },
  ];

  return (
    <Fragment>
      <div className={modules.wrapper}>
        <div className={modules.topContent}>
        <h3 style={{marginTop:'0px' }}>Daily Sales</h3>
          <button className={modules.actionBtn} onClick={changeDataViewHandler}>
            {displayedSalesData === "Graph" ? "Text" : "Graph"}
          </button>
        </div>
        {displayedSalesData === "Graph" ? (
          <div className={modules.chartDisplay}>
            <BarChart width={500} height={200} data={data}>
              <XAxis dataKey="name" tick={{ fill: "black" }} />
              <YAxis tick={{ fill: "black" }} />
              <Bar dataKey="uv" barSize={30} fill="#8884d8" />
            </BarChart>
          </div>
        ) : (
          <div className={modules.textDisplay}>
            {data.map((dataKey) => (
              <h3>{`${dataKey.name}: ${dataKey.uv} ₪`}</h3>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DailyChart;
