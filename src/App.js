import React, { Fragment } from "react";

//JS imports
import TopNavBar from "./Components/TopNavigationBar/TopNavBar";
import LeftNavBar from "./Components/LeftSideNavigationBar/LeftNavBar";

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
        </main>
      </div>
    </Fragment>
  );
}

export default App;
