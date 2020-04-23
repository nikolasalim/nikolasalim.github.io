import React from "react";
import { Link } from "react-router-dom";

const NavBarContainer = () => {
  return (
    <div>
      <Link to="/">Logo</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default NavBarContainer;
