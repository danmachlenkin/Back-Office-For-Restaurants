//Libraries Imports
import React, { useState } from "react";
import Calendar from "react-calendar";

//JS imports
import CheckBoxs from "./CheckBoxs";
//CSS imports
import modules from './TimeRange.module.css';
import 'react-calendar/dist/Calendar.css';

const TimeRange = () => {
  const [selectedReportTimeRange,setSelectedRepoprtTimeRange] = useState('')
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDate = (date) => {
    setCurrentDate(date);
    setSelectedRepoprtTimeRange(date)
  };

  const reportTimeRangeHandler = (e) => {
      setSelectedRepoprtTimeRange(e);
  }
  console.log(selectedReportTimeRange);


  return (
    <div className={modules.contentWrapper}>
      <Calendar onChange={changeCurrentDate} value={currentDate} />
      <div className={modules.checkBoxesContainer}>
        <CheckBoxs selectedTime={reportTimeRangeHandler}/>
        {/* <input type="checkbox" id="today" name="today" />
        <label htmlFor="today">Today</label><br/>
        <input type="checkbox" id="yesterday" name="yesterday" />
        <label htmlFor="yesterday">Yesterday</label><br/>
        <input type="checkbox" id="7days" name="7days" />
        <label htmlFor="7days">Last 7 Days</label><br/>
        <input type="checkbox" id="30days" name="30days" />
        <label htmlFor="30days">Last 30 Days</label><br/> */}
      </div>
    </div>
  );
};

export default TimeRange;
