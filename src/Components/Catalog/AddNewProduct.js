import React from "react";

//JS imports

//CSS imports

const AddNewProduct = (props) => {
    let saveNewProductAction = props.saveNewProductAction;

    return <div>
        <label>Name:</label>
        <input type="text"/> 
        <label>Price:</label>
        <input type="number"/>
        <button onClick={saveNewProductAction}>Save</button>      
    </div>
};

export default AddNewProduct;