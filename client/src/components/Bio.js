import React from "react";
import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div style={{ height: "100vh" }}>
      Hi, I'm Niko and I love creating things for a living. I've created as a
      digital marketer, art director, strategist, copywriter and sushi
      apprentice. Now I'm creating as a front-end developer. If you want to
      collab, <Link to="/about">hit me up :-)</Link>
    </div>
  );
};

export default Bio;
