import React from "react";

//JS imports

//CSS imports
import modules from "./ProductItem.module.css";

const ProductItem = (props) => {
  let productName = props.name;
  let productPrice = props.price;
  let productId = props.itemId;

  return (
    <div className={modules.productDiv}>
      <p>{productName}</p>
      <p>{productPrice + ' ₪'}</p>
      <p>{productId}</p>
      <div className={modules.productAction}>
        <span>edit</span>
        <span><input type="checkbox" /></span>
      </div>
    </div>
  );
};

export default ProductItem;
