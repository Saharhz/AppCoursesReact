import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-5 bg-amber-200 mb-4 flex space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      {/* <NavLink to="./courses">Courses</NavLink> */}
    </nav>
  );
}
