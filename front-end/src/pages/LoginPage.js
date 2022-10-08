import React from "react";

//JS imports
import SignUp from "../Components/Login/SignUp";
import Card from "../Components/UI/Card";

//CSS imports
import modules from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={modules.page}>
      <div className={modules.contentWrapper}>
        <SignUp />

        {/* <LogIn /> */}
      </div>
    </div>
  );
};

export default LoginPage;
