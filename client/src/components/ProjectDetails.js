import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectDetails.module.css";

function ProjectDetails(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return props.project.map((info) => {
    return (
      <div className={classes.body}>
        <div key={info.id} className={classes.projectBox}>
          <h1 className={classes.text}>{info.thumbName}</h1>
          <p className={classes.subText}>{info.description}</p>
          <div className={classes.link}>
            <a href={info.repo} target="_blank">
              CHECK THE REPO
            </a>
            <p className={classes.text}></p>
          </div>
          <img src={info.image} className={classes.image}></img>
        </div>
      </div>
    );
  });
}

export default ProjectDetails;
