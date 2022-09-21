import React, { Fragment } from "react";

//JS imports
import TopNavBar from "./Components/TopNavigationBar/TopNavBar";
import LeftNavBar from "./Components/LeftSideNavigationBar/LeftNavBar";
import Card from "./Components/UI/Card";

//CSS imports
import modules from "./App.module.css";
import Dashboard from "./pages/Dashboards";

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
              <Dashboard />
            </Card>
          </section>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
