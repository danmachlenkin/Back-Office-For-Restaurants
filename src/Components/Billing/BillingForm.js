import React, { Fragment } from "react";

//JS imports

//Css imports
import modules from "./BillingForm.module.css";

const BillingForm = () => {
  return (
    <Fragment>
      <form className={modules.formWrapper}>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>First Name </label>
          <input className={modules.inputDesign} type="text"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>Last Name </label>
          <input className={modules.inputDesign} type="text"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>Legal ID </label>
          <input  className={modules.inputDesign} type="number"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>Email </label>
          <input className={modules.inputDesign} type="email"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>Phone </label>
          <input className={modules.inputDesign} type="number"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>City </label>
          <input className={modules.inputDesign} type="text"></input>
        </div>
        <div className={modules.formSection}>
          <label className={modules.labelDesign}>Street Name </label>
          <input className={modules.inputDesign} type="text"></input>
        </div>
        <h4>Credit Card Details</h4>
        <span><button>Add Credit Card</button></span>
        <div>{/* <PaymentCredentials /> */}</div>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default BillingForm;
