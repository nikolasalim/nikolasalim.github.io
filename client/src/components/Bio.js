import React from "react";
import { Link } from "react-scroll";

import classes from "./Bio.module.css";

const Bio = () => {
  return (
    <div className={classes.body}>
      <div className={classes.nav}>
        <p className={classes.navText}>ABOUT</p>
        <p className={classes.navTextNoLink}> &#x263a; </p>
        <p className={classes.navText}>PROJECTS</p>
      </div>
      <div className={classes.text}>
        HEY, I'M NIKO AND I LOVE
        <br />
        CREATING THINGS FOR A LIVING.
        <br />
        I'VE CREATED AS A DIGITAL MARKETER,
        <br />
        ART DIRECTOR, BRAND STRATEGIST,
        <br /> COPYWRITER, AND SUSHI APPRENTICE. <br />
        NOW I'M CREATING AS <br /> A FRONT-END DEVELOPER.
        <br />
        IF YOU WANT TO COLLAB, <br />
        <Link
          className={classes.link}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          HIT ME UP.
        </Link>
      </div>
      <div className={classes.bottom}></div>
    </div>
  );
};

export default Bio;

{
  /* <div className={classes.bio}>
        HEY, I'M NIKO AND I LOVE
        <br />
        CREATING THINGS FOR A LIVING.
        <br />
        I'VE CREATED AS A DIGITAL MARKETER,
        <br />
        ART DIRECTOR, BRAND STRATEGIST,
        <br /> COPYWRITER, AND SUSHI APPRENTICE. <br />
        NOW I'M CREATING AS <br /> A FRONT-END DEVELOPER.
        <br />
        IF YOU WANT TO COLLAB, <br />
        <Link
          className={classes.link}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          HIT ME UP &#x263a;
        </Link>
      </div> */
}
