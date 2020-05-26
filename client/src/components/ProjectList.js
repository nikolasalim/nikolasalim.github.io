import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectList.module.css";

function ProjectList(props, { style }) {
  const useThumb = () => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
      setHover(true);
    };

    const onMouseLeave = () => {
      setHover(false);
    };

    const thumbStyle = !hover
      ? null
      : { cursor: "url('" + props.thumb + "') 100 100, auto" };

    return { thumbStyle, onMouseEnter, onMouseLeave };
  };

  let { thumbStyle, ...thumbProps } = useThumb();

  return (
    <div className={classes.box}>
      <Link
        to={`/project/${props.id}`}
        className={classes.projectName}
        style={{ ...thumbStyle, ...style }}
        {...thumbProps}
      >
        <p>{props.thumbName}</p>
      </Link>
    </div>
  );
}

export default ProjectList;
