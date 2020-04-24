import React from "react";
import Project from "./Project";

function ProjectContainer() {
  return (
    <div style={{ height: "100vh", backgroundColor: "black", color: "white" }}>
      <Project
        name={"Pomo LaBeouf"}
        description={
          "A vanilla javascript pomodoro website inspired by Shia LaBeouf. Because why not."
        }
        image={
          "https://nssdata.s3.amazonaws.com/images/galleries/22851/SHIA-1.jpg"
        }
        repo={"https://github.com/nikolasalim/Pomo-LaBeouf"}
      />

      <Project
        name={"Pomo LaBeouf"}
        description={
          "A vanilla javascript pomodoro website inspired by Shia LaBeouf. Because why not."
        }
        image={
          "https://nssdata.s3.amazonaws.com/images/galleries/22851/SHIA-1.jpg"
        }
        repo={"https://github.com/nikolasalim/Pomo-LaBeouf"}
      />
    </div>
  );
}

export default ProjectContainer;
