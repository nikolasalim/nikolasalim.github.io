import React from "react";

import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.body}>
      <div className={classes.box}>
        <p className={classes.text}>
          <i>&#9758; NIKOLA SALIM</i>
          <br />
          JR. FRONT-END <br /> DEVELOPER
          <br />
          <br />
          BRAZILIAN / GERMAN <br />
          BASED IN AMSTERDAM
          <br />
          <br />
          <a
            className={classes.link}
            href="mailto:nikolasalim@gmail.com"
            target="_blank"
          >
            &#8594;EMAIL
          </a>
          <br />
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/nikolasalim/"
            target="_blank"
          >
            &#8594;LINKEDIN
          </a>
          <br />
          <a
            className={classes.link}
            href="https://github.com/nikolasalim"
            target="_blank"
          >
            &#8594;GITHUB
          </a>
          <br />
          <a
            className={classes.link}
            href="https://www.codecademy.com/profiles/nikolasalim"
            target="_blank"
          >
            &#8594;CODECADEMY
          </a>
        </p>
      </div>

      <div className={classes.boxDivider}>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.box}>
        <p className={classes.text}>
          <u>SKILLSET:</u>
          <div className={classes.techBox}>
            <div className={classes.techItem}>
              <p>REACT</p>
            </div>
            <div className={classes.techItem}>
              <p>REACT</p>
            </div>
            <div className={classes.techItem}>
              <p>REACT</p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default About;
