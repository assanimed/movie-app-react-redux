import React from "react";
import AddButton from "../../Components/ui/AddButton";
import MoviesList from "./MoviesList";

function Movies() {
  return (
    <div>
      <AddButton text="Add Movies" />
      <div>
        <MoviesList />
      </div>
    </div>
  );
}

export default Movies;
