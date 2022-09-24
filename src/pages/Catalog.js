//Libraries Imports
import React, { Fragment,useState } from "react";

//JS imports
import SearchInput from "../Components/Catalog/SearchInput";
import CatalogItemList from "../Components/Catalog/CatalogItemList";
//CSS imports

const Catalog = () => {
  const [addNewProductStatus,setAddNewProductStatus] = useState(false);

  const addNewProductStatusHandler = (e) => {
    console.log(e)
    if(e.target.innerText==='Add New'){
      setAddNewProductStatus(true);
    }else{
      setAddNewProductStatus(false);
    }
  }


  return (
    <Fragment>
      <SearchInput addNewProductStatus={addNewProductStatusHandler} />
      <CatalogItemList isAddNewProductActive={addNewProductStatus} saveNewProductAction={addNewProductStatusHandler} />
    </Fragment>
  );
};

export default Catalog;
