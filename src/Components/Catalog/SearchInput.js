import React, { Fragment } from "react";


//CSS imports
import modules from './SearchInput.module.css';


const SearchInput = ()=> {

    return <Fragment>
        <h2>Products Catalog</h2>
        <div className="">
            <input placeholder="Search For A product"  type='search' className={modules.inputElement}></input>
            <button className={modules.addNewBtn}>Add New </button>
            <button className={modules.deleteProductBtn}>Delete Selected</button>
        </div>
    </Fragment>
};


export default SearchInput;