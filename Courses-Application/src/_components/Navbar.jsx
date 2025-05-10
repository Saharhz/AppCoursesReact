import React, { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <nav className="p-5 bg-amber-200 mb-4 flex space-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      {/* <NavLink to="./courses">Courses</NavLink> */}
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </nav>
  );
}
