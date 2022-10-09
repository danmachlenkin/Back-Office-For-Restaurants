import React, { useRef } from "react";

//JS imports

//CSS imports
import modules from "./SingUp.module.css";

const SignUp = (props) => {
  const fullNameRef = useRef();
  const businessNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const loginStatusHandler = () => {
    //User is registered and want to login
    props.loginStatus(true);
  };

  const registrationRequestHandler = (el) => {
    el.preventDefault();
    //Validation of registration data
      console.log(fullNameRef.current.value)
      console.log(businessNameRef.current.value)
      console.log(emailRef.current.value)
      console.log(passwordRef.current.value)
      console.log(confirmPasswordRef.current.value)
    //Log user into the app
    props.loginRequested(true);
  };

  return (
    <div className={modules.formDisplay}>
      <form onSubmit={registrationRequestHandler}>
        <h3>Sign Up Now</h3>
        <div>
          <label className={modules.inputLabel}>Full Name</label>
          <input type="text" ref={fullNameRef}></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Business Name</label>
          <input type="text" ref={businessNameRef}></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Email</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Password</label>
          <input type="password" ref={passwordRef}></input>
        </div>
        <div>
          <label className={modules.inputLabel}>Confirm Password</label>
          <input type="password" ref={confirmPasswordRef}></input>
        </div>
        <div>
          <button className={modules.submitBtn} type="submit">
            Register
          </button>
        </div>
        <div>
          <button
            className={modules.loginBtn}
            type="button"
            onClick={loginStatusHandler}
          >
            I Have An Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
