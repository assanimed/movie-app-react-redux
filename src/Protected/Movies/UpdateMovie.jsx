import { useParams } from "react-router";
import UpdateMovieForm from "../../Components/forms/UpdateMovieForm";

import { useGetMovieQuery } from "../../features/movie/movieApiSlice";

const UpdateMovie = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError, error } = useGetMovieQuery(id);
  let movie = null;
  if (isSuccess) movie = data?.data;

  let content;
  if (isLoading) content = <h1> Wait... </h1>;
  if (isSuccess)
    content = <UpdateMovieForm movie={movie.attributes} id={movie.id} />;
  return content;
};

export default UpdateMovie;
