import React from "react";
import { courses } from "../data.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="flex text-2xl font-semibold items-center justify-center">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 sm: grid-cols-3 gap-4">
        {courses.map((courses) => (
          <div key={courses.id}>
            <div>
              <h3>{courses.title}</h3>
            </div>
            <Link to={`/courses/${courses.id}`}>
              <button className="mt-2 mx-6 mb-7 p-2 bg-[hsl(0,0%,93%)] rounded-2xl hover:bg-amber-100">
                More Information
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
