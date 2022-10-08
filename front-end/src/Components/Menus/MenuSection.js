import React, { Fragment } from "react";
import Menus from "../../pages/Menus";

//JS imports

//CSS imports
import modules from "./MenuSection.module.css";

const MenuSection = () => {
  return (
    <Fragment>
      <div className={modules.contentContainer}>
        <label  className={modules.element}>Choose Menu Section</label>
        <select className={modules.element}>
          <option value="starters">Starters</option>
          <option value="maincourse">Main Course</option>
          <option value="deserts">Deserts</option>
          <option value="drinks">Drinks</option>
        </select>
        <input className={modules.element} type="search" placeholder="Search For Product"></input>
        <div className={modules.selectedProducts}>
          <li>Pizza</li>
          <li>Pasta</li>
          <li>Salad</li>
          <li>Frutis</li>
          <li>Drinks</li>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuSection;
