import React from "react";
import ProjectDetails from "./ProjectDetails";
import NavBarProject from "./NavBarProject";
import allProjects from "../allProjects";

function ProjectDetailsContainer(props) {
  const projectInfo = allProjects.filter((project) => {
    return project.id === Number(props.match.params.projectId);
  });

  return (
    <div>
      <NavBarProject />
      <ProjectDetails project={projectInfo} />
    </div>
  );
}

export default ProjectDetailsContainer;
