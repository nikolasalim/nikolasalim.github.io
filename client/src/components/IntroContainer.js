import React from "react";
import BioContainer from "./BioContainer";
import AboutContainer from "./AboutContainer";
import NavBarIntro from "./NavBarIntro";

import { Element } from "react-scroll";

function IntroContainer() {
  return (
    <div>
      <NavBarIntro />
      <BioContainer />
      <Element id="about" name="about">
        <AboutContainer />
      </Element>
    </div>
  );
}

export default IntroContainer;
