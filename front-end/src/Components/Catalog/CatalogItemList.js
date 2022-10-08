import React, { Fragment } from "react";

//JS imports
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
//CSS imports
import modules from "./CatalogItemList.module.css";

let DUMMY_DATA = [
  { name: "Humus Bowl", price: 35, itemId: 1 },
  { name: "Shawarma Plate", price: 55, itemId: 2 },
  { name: "Fish & Chips", price: 40, itemId: 3 },
  { name: "Chicken Meat", price: 42, itemId: 4 },
  { name: "Salad", price: 22, itemId: 5 },
];

const CatalogItemList = (props) => {
  const updateListData = (name, price, e) => {
    DUMMY_DATA = [
      ...DUMMY_DATA,
      {
        name: name.current.value,
        price: price.current.value,
        itemId: DUMMY_DATA[DUMMY_DATA.length - 1].itemId + 1,
      },
    ];
    props.saveNewProductAction(e);
  };

  let isAddNewProductActive = props.isAddNewProductActive;
  console.log(isAddNewProductActive);
  let saveNewProductAction = props.saveNewProductAction;
  return (
    <Fragment>
      <div className={modules.contentWrapper}>
        {isAddNewProductActive ? (
          <div>
            <AddNewProduct
              saveNewProductAction={saveNewProductAction}
              productInfo={updateListData}
            />
          </div>
        ) : (
          <div>
            <div className={modules.listHeadLines}>
              <span>Item Name</span>
              <span>Price</span>
              <span>Item ID</span>
            </div>
            <div>
              {DUMMY_DATA.map((item) => (
                <ProductItem
                  name={item.name}
                  price={item.price}
                  itemId={item.itemId}
                  key={item.itemId}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CatalogItemList;
