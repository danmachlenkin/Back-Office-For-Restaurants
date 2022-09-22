import React from "react";

//JS imports

//CSS imports
import modules from "./InventoryList.module.css";

const InventoryList = () => {
  return (
    <div>
      <div>
        <input type="search" placeholder="Search for an Item " />
      </div>
      <div className={modules.contentWrapper}>
        {/* {data.map((data) => (
          <InventoryItem />
        ))} */}
      </div>
    </div>
  );
};

export default InventoryList;
