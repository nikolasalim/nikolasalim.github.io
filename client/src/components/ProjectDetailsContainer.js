import React from "react";
import ProjectDetails from "./ProjectDetails";
import allProjects from "../allProjects";

function ProjectDetailsContainer(props) {
  const projectInfo = allProjects.filter((project) => {
    return project.id === Number(props.match.params.projectId);
  });

  return (
    <div>
      <ProjectDetails project={projectInfo} />
    </div>
  );
}

export default ProjectDetailsContainer;
