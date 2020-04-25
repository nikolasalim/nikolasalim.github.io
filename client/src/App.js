import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AboutContainer from "./components/AboutContainer";
import Bio from "./components/Bio";
import NavBarContainer from "./components/NavBarContainer";
import ProjectListContainer from "./components/ProjectListContainer";
import ProjectDetailsContainer from "./components/ProjectDetailsContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route
          path="/project/:projectId"
          component={ProjectDetailsContainer}
        ></Route>
        <Route path="/about" component={AboutContainer}></Route>
        <Route path="/" component={Bio}></Route>
      </Switch>
      <ProjectListContainer />
    </div>
  );
}

export default App;
