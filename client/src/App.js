import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import IntroContainer from "./components/IntroContainer";
import FooterContainer from "./components/FooterContainer";
import ProjectListContainer from "./components/ProjectListContainer";
import ProjectDetailsContainer from "./components/ProjectDetailsContainer";

import BioContainer from "./components/BioContainer";
import AboutContainer from "./components/AboutContainer";
import NavBarIntro from "./components/NavBarIntro";

import { Element } from "react-scroll";
import About from "./components/About";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/project/:projectId"
          component={ProjectDetailsContainer}
        ></Route>
        {/* <NavBarIntro />
        <BioContainer />
        <AboutContainer /> */}

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
