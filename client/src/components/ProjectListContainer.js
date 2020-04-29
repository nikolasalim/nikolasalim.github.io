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
              name={project.name}
              image={project.image}
              className={classes.box}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectListContainer;
