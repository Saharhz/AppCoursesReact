import React from "react";
import { courses } from "../data.js";
import { useParams } from "react-router-dom";

export default function DetailedData() {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) return <p>Course not found.</p>;
  return (
    <div className="p-6">
      <h1 className="flex text-2xl font-semibold items-center justify-center p-7 pb-5">
        Available Courses
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {courses.map((courses) => (
          <li key={courses.id}>
            <h3>{courses.title}</h3>
            <p>{courses.description}</p>
            <p>Duration: {courses.duration}</p>
            <p>Level: {courses.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
