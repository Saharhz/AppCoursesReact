import React from "react";
import { fetchCourses } from "../api/courses";
import Course from "./course";
import { useQuery } from "@tanstack/react-query";

export default function courses() {
  const { isPending, error, data } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetchCourses(),
  });

  if (isPending)
    return <p className="text-2xl text-center mt-10">Loading Products...</p>;

  if (error)
    return (
      <p className="text-2xl text-center text-red-600 mt-10">{error.message}</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-12">
      <h1 className="text-3xl font-bold text-center text-amber-700 mb-8">
        Available Courses
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <Course key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
