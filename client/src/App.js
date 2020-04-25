import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import IntroContainer from "./components/IntroContainer";
import FooterContainer from "./components/FooterContainer";
import ProjectListContainer from "./components/ProjectListContainer";
import ProjectDetailsContainer from "./components/ProjectDetailsContainer";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/project/:projectId"
          component={ProjectDetailsContainer}
        ></Route>
        <Route path="/" component={IntroContainer}></Route>
      </Switch>
      <ProjectListContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
