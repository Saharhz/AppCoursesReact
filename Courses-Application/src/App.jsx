import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailedData from "./pages/DetailedData";
import About from "./pages/About";
import Navbar from "./_components/Navbar.jsx";
import Available from "./pages/Available.jsx";
import Courses from "./fetch-courses/courses.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Available />} />
      </Routes>
    </>
  );
}

export default App;
