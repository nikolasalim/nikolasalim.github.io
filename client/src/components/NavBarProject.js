import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
import classes from "./NavBar.module.css";

function NavBarProject() {
  return (
    <div>
      <div className={classes.bodyWhiteBg}>
        <div className={classes.navBoxLeft}>
          <LinkRouter to="/" className={classes.navTextWhiteBg}>
            &#8592;HOME
          </LinkRouter>
        </div>

        <div className={classes.navBoxRight}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={800}
            className={classes.navTextWhiteBg}
          >
            <p>PROJECTS</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarProject;
