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

//CSS imports
import modules from "./App.module.css";

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const pageSelectionHandler = (pageName) => {
    console.log(pageName);
    setSelectedPage(pageName);
  };

  return (
    <Fragment>
      <div className={modules.container}>
        <nav>
          <TopNavBar />
        </nav>
        <main className={modules.main_container}>
          <nav>
            <LeftNavBar selectPage={pageSelectionHandler}/>
          </nav>
          <section className={modules.display_window}>
            <Card>
              {selectedPage==="dashboard" && <Dashboard />}
              {selectedPage==="catalog" && <Catalog />}
              {selectedPage==="menus" && <Menus />}
              {selectedPage==="reports" && <Reports />}
              {selectedPage==="customers" && <Customers />}
              {selectedPage==="inventory" && <Inventory />}
            </Card>
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
