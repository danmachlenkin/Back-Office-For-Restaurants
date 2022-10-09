import React, { Fragment, useState } from "react";

//JS imports
import TopNavBar from "./Components/TopNavigationBar/TopNavBar";
import LeftNavBar from "./Components/LeftSideNavigationBar/LeftNavBar";
import Card from "./Components/UI/Card";
import Dashboard from "./pages/Dashboards";
import Catalog from "./pages/Catalog";
import Menus from "./pages/Menus";
import Reports from "./pages/Reports";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Billing from "./pages/Billing";
import IssueReport from "./pages/IssueReport";
//CSS imports
import modules from "./App.module.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pageSelectionHandler = (pageName) => {
    console.log(pageName);
    setSelectedPage(pageName);
  };

  const loginSucessHandler = (bool) => {
    setIsLoggedIn(bool);
  }

  return (
    <Fragment>
      {isLoggedIn ? (
        <div>
          <div className={modules.container}>
            <nav>
              <TopNavBar />
            </nav>
            <main className={modules.main_container}>
              <nav>
                <LeftNavBar selectPage={pageSelectionHandler} />
              </nav>
              <section className={modules.display_window}>
                <Card>
                  {selectedPage === "dashboard" && <Dashboard />}
                  {selectedPage === "catalog" && <Catalog />}
                  {selectedPage === "menus" && <Menus />}
                  {selectedPage === "reports" && <Reports />}
                  {selectedPage === "customers" && <Customers />}
                  {selectedPage === "inventory" && <Inventory />}
                  {selectedPage === "billing" && <Billing />}
                  {selectedPage === "report an issue" && <IssueReport />}
                </Card>
              </section>
            </main>
          </div>
        </div>
      ) : (
        <div> <LoginPage isLoginSucessfull={loginSucessHandler}/></div>
      )}
    </Fragment>
  );
}

export default App;
