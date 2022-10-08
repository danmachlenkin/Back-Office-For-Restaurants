import React, { useRef } from "react";

//JS imports

//CSS imports

const AddNewProduct = (props) => {
  let saveNewProductAction = props.saveNewProductAction;
  const newProductName = useRef();
  const newProductPrice = useRef();

    const formDataHandler = (e) => {
        e.preventDefault();
        props.productInfo(newProductName,newProductPrice,e);
    }

  return (
    <form onSubmit={formDataHandler}>
      <label>Name:</label>
      <input type="text" ref={newProductName} />
      <label>Price:</label>
      <input type="number" ref={newProductPrice} />
      <button type="submit">
        Save
      </button>
    </form>
  );
};

export default AddNewProduct;
