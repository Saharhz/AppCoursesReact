import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function course({ id, title, description, duration, level }) {
  const queryClient = useQueryClient();

  return (
    <div>
      <ul>
        <li className="bg-teal-50 border-amber-300 border p-4 rounded mb-4">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">{title}</h3>
          <p className="text-gray-700 mb-1">{description}</p>
          <p className="text-sm text-gray-600">Duration: {duration}</p>
          <p className="text-sm text-gray-600">Level: {level}</p>
        </li>
      </ul>
    </div>
  );
}
