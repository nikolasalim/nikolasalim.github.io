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
        <div className={classes.skillSet}>
          <div className={classes.skillBox}>
            <p className={classes.techText}>TECH&#8594;</p>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>HTML &#38; CSS</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>JAVASCRIPT</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>REACT</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>REDUX</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>NODE.JS</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>REST APIs</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>POSGRESQL</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>DOCKER</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>SEQUELIZE</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>GIT &#38; GITHUB</p>
            </div>
          </div>
          <div className={classes.skillBox}>
            <p className={classes.designText}>DESIGN&#8594;</p>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>PHOTOSHOP</p>
            </div>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>ILLUSTRATOR</p>
            </div>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>INDESIGN</p>
            </div>
          </div>
          <div className={classes.skillBox}>
            <p className={classes.langText}>LANG&#8594;</p>
            <div className={classes.langItem}>
              <p className={classes.langSubText}>ENGLISH</p>
            </div>
            <div className={classes.langItem}>
              <p className={classes.langSubText}>PORTUGUESE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
