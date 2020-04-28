import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import IntroContainer from "./components/IntroContainer";
import FooterContainer from "./components/FooterContainer";
import ProjectListContainer from "./components/ProjectListContainer";
import ProjectDetailsContainer from "./components/ProjectDetailsContainer";

import { Element } from "react-scroll";

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
      <Element id="projects" name="projects">
        <ProjectListContainer />
      </Element>

      <FooterContainer />
    </div>
  );
}

export default App;
