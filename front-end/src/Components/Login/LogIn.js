import React,{useRef} from "react";

//JS imports

//CSS imports
import modules from './Login.module.css';



const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

    const loginStatusHandler = ()=> {
        //User wants to register
      props.loginStatus(false);
    }

    const loginRequestHandler = (el) => {
        el.preventDefault();
        //Validate user data from form fields
          console.log(emailRef.current.value)
          console.log(passwordRef.current.value)
        //Log user into the app
        props.loginRequested(true);
    }

  return (
    <div className={modules.formDisplay}>
      <form>
        <h3>Login To Your Account</h3>
        <div className={modules.contentDiv}>
          <label>Email</label>
          <input type="text" ref={emailRef}></input>
        </div>
        <div className={modules.contentDiv}>
          <label>Password</label>
          <input type="password" ref={passwordRef}></input>
        </div>
        <div>
            <button className={modules.loginBtn} type="submit" onClick={loginRequestHandler}>Login</button>
        </div>
        <div>
            <button className={modules.registerBtn} type="button" onClick={loginStatusHandler}>I Want To Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
