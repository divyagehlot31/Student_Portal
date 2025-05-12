import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </>
    </nav>
  );
}

export default NavBar;
