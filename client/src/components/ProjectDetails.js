import React, { useEffect } from "react";

import classes from "./ProjectDetails.module.css";

function ProjectDetails(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return props.project.map((info) => {
    return (
      <div className={classes.body}>
        <div key={info.id} className={classes.projectBox}>
          <h1 className={classes.text}>{info.name}</h1>
          <p className={classes.description}>{info.description}</p>
          <img src={info.image} className={classes.image}></img>
          <div className={classes.linkBox}>
            <a href={info.repo} target="_blank" className={classes.link}>
              Github repo
            </a>
            <a href={info.deployed} target="_blank" className={classes.link}>
              Deployed version
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default ProjectDetails;
