import React,{useState} from "react";

//JS imports

//CSS imports
import modules from "./SingUp.module.css";

const SignUp = (props) => {

const loginStatusHandler = ()=> {
    //User is registered and want to login
  props.loginStatus(true);
}

const registrationRequestHandler = (el) => {
  el.preventDefault();
  //Validation of registration data

  //Log user into the app
  props.loginRequested(true);
}

  return (
    <div className={modules.formDisplay}>
      <form>
        <h3>Sign Up Now</h3>
        <div>
          <label className={modules.inputLabel}>Full Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Business Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Confirm Password</label>
          <input type="password"></input>
        </div>
        <div>
            <button className={modules.submitBtn} type="submit" onClick={registrationRequestHandler}>Register</button>
        </div>
        <div>
            <button className={modules.loginBtn} type="button" onClick={loginStatusHandler}>I Have An Account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
