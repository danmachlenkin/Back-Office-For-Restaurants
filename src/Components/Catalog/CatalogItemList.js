import React, { Fragment } from "react";

//JS imports

//CSS imports
import modules from './CatalogItemList.module.css';

const CatalogItemList = () => {
  return (
    <Fragment>
      <div className={modules.contentWrapper}>
        <ul>
          <li>Humus</li>
          <li>Shawarma</li>
          <li>Burger</li>
          <li>Pizza</li>
          <li>Pasta</li>
          <li>Salad</li>
          <li>Frutis</li>
          <li>Drinks</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CatalogItemList;
