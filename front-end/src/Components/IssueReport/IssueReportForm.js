import React from "react";

//JS imports

//CSS imports
import modules from './IssueReportForm.module.css';

const IssueReportForm = () => {
  return (
    <form>
      <h3>Select Subject</h3>
      <select className={modules.select}>
        <option>Dashboard</option>
        <option>Catalog</option>
        <option>Menus</option>
        <option>Reports</option>
        <option>Customers</option>
        <option>Inventory</option>
        <option>Billing</option>
        <option>Technical Support</option>
        <option>Other</option>
      </select>
      <h3>Type Of Issue</h3>
      <select style={{display:'block'}} className={modules.select}>
        <option>Bug Report</option>
        <option>Feature Request</option>
        <option>Feedback</option>
        <option>Other</option>
      </select>
      <input type="email" placeholder="Please submit your email here" className={modules.emailInput}></input>
      <span>*We will communicate through this mail</span>
      <h3 style={{marginTop:'0px'}}>Write Your Request </h3>
      <textarea placeholder="Please Describe In Detail Your Request.." className={modules.textArea}></textarea>
      <div className={modules.actionsWrapper}>
        <button type="submit" className={modules.submitBtn}>Submit</button>
        <button className={modules.uploadBtn}>Upload Screenshots</button>
      </div>
    </form>
  );
};

export default IssueReportForm;
