import React, { Fragment } from "react";

//JS imports

//CSS imports
import modules from "./LeftNavBar.module.css";
import report_issue_img from "../../images/report_issue.png";
import support_img from "../../images/support.png";

const LeftNavBar = (props) => {
  const sections = [
    "Dashboard",
    "Catalog",
    "Menus",
    "Reports",
    "Customers",
    "Inventory",
    "Billing",
  ];
  return (
    <Fragment>
      <div className={modules.container}>
        {sections.map((item) => (
          <h3 className={modules.section}>{item}</h3>
        ))}
        <div className={modules.actions_container}>
          <div className={modules.action} style={{marginLeft: '10px'}}>
            <p>Report An Issue</p>
            <img src={report_issue_img} alt="report_issue" width="50px" height="50px" style={{marginLeft: '20px'}} />
          </div>
          <div className={modules.action}>
            <p>Support</p>
            <img  src={support_img}  alt="support"  width="50px"  height="50px" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LeftNavBar;
