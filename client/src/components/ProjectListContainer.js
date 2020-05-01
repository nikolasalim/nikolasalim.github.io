import React from "react";
import ProjectList from "./ProjectList";
import allProjects from "../allProjects";

import classes from "./ProjectListContainer.module.css";

function ProjectListContainer() {
  return (
    <div className={classes.body}>
      <div>
        {allProjects.map((project) => {
          return (
            <ProjectList
              key={project.id}
              id={project.id}
              thumbName={project.thumbName}
              thumb={project.thumb}
              className={classes.box}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectListContainer;
