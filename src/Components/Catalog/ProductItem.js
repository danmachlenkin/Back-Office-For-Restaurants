import React from "react";  

//JS imports

//CSS imports
import modules from './ProductItem.module.css';

const ProductItem = (props) => {
    let productName = props.name;
    let productPrice = props.price;
    let productId = props.itemId;

    return <div className={modules.productDiv}>
        <input type="checkbox" />
        <span>{productName}</span>
        <span>{productPrice}</span>
        <span>{productId}</span>
        <span>edit product</span>
    </div>
};

export default ProductItem;