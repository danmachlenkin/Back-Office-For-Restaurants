import React from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";



const ProtectedRoutes = () => {
    let isLoggedIn = false;
    return <>
        {isLoggedIn ? <Outlet/> : <LoginPage/>}
    </>
};


export default ProtectedRoutes;