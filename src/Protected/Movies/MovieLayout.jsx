import React from "react";
import { Outlet } from "react-router";

function MovieLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MovieLayout;
