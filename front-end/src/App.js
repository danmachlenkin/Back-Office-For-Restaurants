//Libraries Imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
import ProtectedRoutes from "./util/protectedRoutes";

//Definning Router

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pageSelectionHandler = (pageName) => {
    console.log(pageName);
    setSelectedPage(pageName);
  };

  const loginSucessHandler = (bool) => {
    setIsLoggedIn(bool);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
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
              <LoginPage />
            )
          }
        ></Route>
      </Routes>

      {/* <Routes>
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
                  
                </Card>
              </section>
            </main>
          </div>
        </div>
      </Routes> */}
    </Router>
  );
}
export default App;
