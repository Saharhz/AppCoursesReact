import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function course({ id, title, description, duration, level }) {
  const queryClient = useQueryClient();

  return (
    <div>
      <h1 className="flex text-2xl font-semibold items-center justify-center p-7 pb-5">
        Available Courses
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        <li>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Duration: {duration}</p>
          <p>Level: {level}</p>
        </li>
      </ul>
    </div>
  );
}
