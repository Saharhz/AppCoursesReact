import React from "react";
import { fetchCourses } from "../api/courses";
import Course from "./course";
import { useQuery } from "@tanstack/react-query";

export default function courses() {
  const { isPending, error, data } = useQuery({
    queryKey: ["courses"],
    queryFn: () => fetchCourses(),
  });

  if (isPending) return <p className="text-2xl">Loading Products...</p>;

  if (error) return <p className="text-2xl text-red-600">{error.message}</p>;

  return (
    <div>
      {data.map((item) => (
        <Course {...item} />
      ))}
    </div>
  );
}
