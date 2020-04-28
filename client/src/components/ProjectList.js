import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectList.module.css";

function ProjectList(props) {
  return (
    <div>
      <Link to={`/project/${props.id}`} className={classes.projectName}>
        <p>{props.name}</p>
      </Link>
    </div>
  );
}

export default ProjectList;
