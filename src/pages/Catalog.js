//Libraries Imports
import React, { Fragment } from "react";

//JS imports
import SearchInput from "../Components/Catalog/SearchInput";
import CatalogItemList from "../Components/Catalog/CatalogItemList";
//CSS imports

const Catalog = () => {
  return (
    <Fragment>
      <SearchInput />
      <CatalogItemList />
    </Fragment>
  );
};

export default Catalog;
