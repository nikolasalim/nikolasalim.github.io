import React from "react";
import { animateScroll as scroll } from "react-scroll";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.body}>
      <a
        className={classes.topIcon}
        onClick={() =>
          scroll.scrollToTop({
            smooth: true,
          })
        }
      >
        &#8593;
      </a>
    </div>
  );
};

export default Footer;
