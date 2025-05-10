import React from "react";
import { courses } from "../data.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-10">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((courses) => (
          <div
            key={courses.id}
            className="bg-white border border-amber-200 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-3">
                {courses.title}
              </h3>
            </div>
            <Link to={`/courses/${courses.id}`}>
              <button className="w-full p-2 bg-amber-100 rounded-lg text-amber-900 hover:bg-amber-200 transition">
                More Information
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
