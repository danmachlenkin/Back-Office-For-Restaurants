import React from "react";

//JS imports

//CSS imports

const IssueReportForm = () => {
  return (
    <form>
      <h3>Select Subject</h3>
      <select>
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
      <select style={{display:'block'}}>
        <option>Bug Report</option>
        <option>Feature Request</option>
        <option>Feedback</option>
        <option>Other</option>
      </select>
      <input type="email" placeholder="Please submit your email here"></input>{" "}
      <span>*We will communicate through this mail</span>
      <textarea placeholder="Please Describe In Detail Your Request.."></textarea>
      <div>
        <button type="submit">Submit</button>
        <button>Upload Screenshots</button>
      </div>
    </form>
  );
};

export default IssueReportForm;
