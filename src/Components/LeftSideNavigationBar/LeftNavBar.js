import React, { Fragment } from "react";

//JS imports


//CSS imports
import modules from './LeftNavBar.module.css';

const LeftNavBar = (props) => {
    const sections = ['Dashboard','Catalog','Menus','Reports','Customers','Inventory','Billing'];
    return (
        <Fragment>
            <div className={modules.container}>
            {sections.map(item => <h3 className={modules.section}>{item}</h3>)}
            </div>
        </Fragment>
    )
};

export default LeftNavBar;