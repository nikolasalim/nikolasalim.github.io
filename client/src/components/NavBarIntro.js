import React from "react";
import { Link } from "react-scroll";
import classes from "./NavBar.module.css";

function NavBarIntro() {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.navBoxLeft}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={classes.navText}
          >
            <p>ABOUT</p>
          </Link>
        </div>

        <div className={classes.navBoxCenter}>
          <p className={classes.navTextNoLink}> &#x263a; {/* &#9787; */} </p>
        </div>

        <div className={classes.navBoxRight}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={800}
            className={classes.navText}
          >
            <p>PROJECTS</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBarIntro;
