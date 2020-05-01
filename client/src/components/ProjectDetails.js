import React, { useEffect } from "react";

function ProjectDetails(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return props.project.map((info) => {
    return (
      <div key={info.id} style={{ height: "100vh" }}>
        <h1>{info.thumbName}</h1>
        <p>{info.description}</p>
        <img src={info.image} style={{ maxHeight: "500px" }}></img>
        <p>{info.repo}</p>
      </div>
    );
  });
}

export default ProjectDetails;
