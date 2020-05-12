import React, { useEffect } from "react";
import NavBarProject from "./NavBarProject";
import classes from "./NonTechProjects.module.css";

function NonTechProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <NavBarProject />
      <div className={classes.body}>
        <div className={classes.projectBox}>
          <h1 className={classes.text}>Title</h1>
          <p className={classes.description}>
            descriptiondescriptiondescriptiondescription
          </p>
          <img src={"test"} className={classes.image}></img>
          <div className={classes.divider} />
        </div>
      </div>
    </div>
  );
}

export default NonTechProjects;
