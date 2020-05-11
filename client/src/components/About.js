import React from "react";

import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.body}>
      <div className={classes.box}>
        <p className={classes.text}>&#9758; NIKOLA SALIM</p>
        <br />
        <br />
        <div>
          <p className={classes.subText}>Jr. Front-End Developer</p>
          <br />
          <p className={classes.subText}>Brazilian / German</p>
          <br />
          <p className={classes.subText}>Based in Amsterdam</p> <br />
        </div>

        <br />
        <div className={classes.text}>
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
        </div>
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
              <p className={classes.techSubText}>Javascript</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>React</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>Redux</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>Node.js</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>REST APIs</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>PostgreSQL</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>Docker</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>Sequelize</p>
            </div>
            <div className={classes.techItem}>
              <p className={classes.techSubText}>Git &#38; Github</p>
            </div>
          </div>
          <div className={classes.skillBox}>
            <p className={classes.designText}>DESIGN&#8594;</p>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>Photoshop</p>
            </div>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>Illustrator</p>
            </div>
            <div className={classes.designItem}>
              <p className={classes.designSubText}>InDesign</p>
            </div>
          </div>
          <div className={classes.skillBox}>
            <p className={classes.langText}>LANG&#8594;</p>
            <div className={classes.langItem}>
              <p className={classes.langSubText}>English</p>
            </div>
            <div className={classes.langItem}>
              <p className={classes.langSubText}>Portuguese</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
