import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutContainer from "./components/AboutContainer";
import NavBarContainer from "./components/NavBarContainer";
import Bio from "./components/Bio";

function App() {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route path="/about" component={AboutContainer}></Route>
        <Route path="/" component={Bio}></Route>
      </Switch>
    </div>
  );
}

export default App;
