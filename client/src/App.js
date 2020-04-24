import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AboutContainer from "./components/AboutContainer";
import Bio from "./components/Bio";
import NavBarContainer from "./components/NavBarContainer";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route path="/about" component={AboutContainer}></Route>
        <Route exact path="/" component={Bio}></Route>
      </Switch>
      <ProjectContainer />
    </div>
  );
}

export default App;
