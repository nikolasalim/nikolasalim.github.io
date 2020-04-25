import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "blue", height: "115px" }}>
      <div>
        <a
          onClick={() =>
            scroll.scrollToTop({
              smooth: true,
            })
          }
        >
          BACK TO TOP
        </a>
      </div>
    </div>
  );
};

export default Footer;
