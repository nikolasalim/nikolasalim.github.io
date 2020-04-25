import React from "react";

function ProjectDetails(props) {
  return props.project.map((info) => {
    return (
      <div key={info.id}>
        <h1>{info.name}</h1>
        <p>{info.description}</p>
        <img src={info.image} style={{ maxHeight: "500px" }}></img>
        <p>{info.repo}</p>
      </div>
    );
  });
}

export default ProjectDetails;
