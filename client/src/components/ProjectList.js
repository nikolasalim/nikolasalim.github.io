import React from "react";
import { Link } from "react-router-dom";

function ProjectList(props) {
  return (
    <div>
      <Link to={`/project/${props.id}`}>
        <p>{props.name}</p>
      </Link>
    </div>
  );
}

export default ProjectList;
