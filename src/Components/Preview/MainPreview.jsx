import { useParams, Navigate } from "react-router";

import Filter from "./Filter/Filter";
import MovieGrid from "./MovieGrid/MovieGrid";

import { list } from "./previewPages";

function MainPreview() {
  const { page } = useParams();

  if (!list.includes(page)) return <Navigate to="/notFound" />;

  return (
    <div className="p-[20px]">
      <Filter />
      <MovieGrid />
    </div>
  );
}

export default MainPreview;
