import React from "react";
import { Link } from "react-scroll";

import classes from "./Bio.module.css";

const Bio = () => {
  return (
    <div className={classes.body}>
      <div className={classes.text}>
        Hey, I'm Niko and I love
        <br />
        creating things for a living.
        <br />
        I've created as a digital marketer,
        <br />
        art director, brand strategist,
        <br /> copywriter, and sushi apprentice. <br />
        Now I'm creating as <br />a front-end developer.
        <br />
        If you want to collab, <br />
        <Link
          className={classes.link}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          hit me up.
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

{
  /* <div className={classes.nav}>
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
  </div> */
}

//   <div className={classes.navBoxCenter}>
//     <p className={classes.navTextNoLink}> &#x263a; {/* &#9787; */} </p>
//   </div>

//   <div className={classes.navBoxRight}>
//     <Link
//       activeClass="active"
//       to="projects"
//       spy={true}
//       smooth={true}
//       duration={800}
//       className={classes.navText}
//     >
//       <p>PROJECTS</p>
//     </Link>
//   </div>
// </div>
