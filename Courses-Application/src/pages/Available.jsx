import React from "react";
import { Link } from "react-router-dom";

export default function Available() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for did not exixst.</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}
