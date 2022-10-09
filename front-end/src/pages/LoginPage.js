import React from "react";
import { useState } from "react";

//JS imports
import SignUp from "../Components/Login/SignUp";
import Login from "../Components/Login/LogIn";

//CSS imports
import modules from "./LoginPage.module.css";

const LoginPage = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    
    const loginRequestHandler = (bool)=> {
        props.isLoginSucessfull(bool);
    }

    const isRegisteredHandler = (bool)=> {
        setIsRegistered(bool);
    }

  return (
    <div className={modules.page}>
      <div className={modules.contentWrapper}>
        {isRegistered ? <Login loginRequested={loginRequestHandler} loginStatus={isRegisteredHandler}/> :<SignUp loginStatus={isRegisteredHandler} loginRequested={loginRequestHandler}/> }
      </div>
    </div>
  );
};

export default LoginPage;
