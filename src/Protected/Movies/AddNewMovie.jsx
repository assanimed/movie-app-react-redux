import React from "react";
import NewMovieForm from "../../Components/forms/NewMovieForm";

function AddNewMovie() {
  return (
    <div>
      <h1 className="text-center text-xl py-2"> Add new Movie</h1>
      <NewMovieForm />
    </div>
  );
}

export default AddNewMovie;
