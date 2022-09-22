import React, { Fragment } from "react";

//JS imports
import TopNavBar from "./Components/TopNavigationBar/TopNavBar";
import LeftNavBar from "./Components/LeftSideNavigationBar/LeftNavBar";
import Card from "./Components/UI/Card";
import Dashboard from "./pages/Dashboards";
import Catalog from "./pages/Catalog";
import Menus from "./pages/Menus";
import Reports from "./pages/Reports";
import Customers from "./pages/Customers";

//CSS imports
import modules from "./App.module.css";


function App() {
  return (
    <Fragment>
      <div className={modules.container}>
        <nav>
          <TopNavBar />
        </nav>
        <main className={modules.main_container}>
          <nav>
            <LeftNavBar />
          </nav>
          <section className={modules.display_window}>
            <Card>
              {/* <Dashboard /> */}
              {/* <Catalog /> */}
              {/* <Menus /> */}
              {/* <Reports /> */}
              <Customers />

            </Card>
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
