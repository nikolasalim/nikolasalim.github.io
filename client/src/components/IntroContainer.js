import React from "react";
import BioContainer from "./BioContainer";
import AboutContainer from "./AboutContainer";

import { Element } from "react-scroll";

function IntroContainer() {
  return (
    <div>
      <BioContainer />
      <Element id="about" name="about">
        <AboutContainer />
      </Element>
    </div>
  );
}

export default IntroContainer;
