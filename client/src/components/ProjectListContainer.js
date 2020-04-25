import React from "react";
import ProjectList from "./ProjectList";
import allProjects from "../allProjects";

function ProjectListContainer() {
  return (
    <div style={{ height: "100vh", backgroundColor: "black", color: "white" }}>
      {allProjects.map((project) => {
        return (
          <ProjectList
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
          />
        );
      })}
    </div>
  );
}

export default ProjectListContainer;
