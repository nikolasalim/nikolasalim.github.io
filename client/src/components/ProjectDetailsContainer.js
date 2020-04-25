import React from "react";
import ProjectDetails from "./ProjectDetails";
import allProjects from "../allProjects";
import { Link } from "react-router-dom";

function ProjectDetailsContainer(props) {
  const projectInfo = allProjects.filter((project) => {
    return project.id === Number(props.match.params.projectId);
  });

  return (
    <div>
      <Link to="/">BACK</Link>
      <ProjectDetails project={projectInfo} />
    </div>
  );
}

export default ProjectDetailsContainer;
