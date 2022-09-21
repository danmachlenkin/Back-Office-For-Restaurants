import React, { Fragment } from "react";

//JS imports
import MenuSection from "../Components/Menus/MenuSection";

//CSS imports
import modules from "./Menus.module.css";

const Menus = () => {
  return (
    <div className={modules.mainContainer}>
      <div className={modules.contentWrapper}>
        <MenuSection />
        <MenuSection />
        <MenuSection />
        <MenuSection />
      </div>
      <div className={modules.exportPDF}>
        <h4>Export Menu To PDF</h4>
        <button className={modules.exportBtn}>Export</button>
      </div>
    </div>
  );
};

export default Menus;
