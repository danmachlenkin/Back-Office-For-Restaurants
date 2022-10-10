import React, { Fragment } from "react";

//CSS imports
import modules from "./TopNavBar.module.css";
import image from '../../images/logo.png';


const TopNavBar = (props) => {
  return (
    <Fragment>
      <div className={modules.container}>
        <img className={modules.img} src={image} alt='logo' width="65" height="65" />
        <h2>Business name</h2>
        <h3 className={modules.owner}>Owners name</h3>
      </div>
    </Fragment>
  );
};

export default TopNavBar;
