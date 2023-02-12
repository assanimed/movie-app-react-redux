import { useEffect } from "react";
import { getMovie } from "../../api/movies/getMovie";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import UpdateMovieForm from "../../Components/forms/UpdateMovieForm";
import { setTitleMovie } from "../../store/TitleSlice";

const UpdateMovie = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.Title.movie);
  const { id } = useParams();
  useEffect(() => {
    const loadMovie = async () => {
      const { data } = await getMovie(id);
      dispatch(setTitleMovie(data));
    };

    loadMovie();
  }, []);
  if (!movie) return <h1> Wait... </h1>;

  return <UpdateMovieForm movie={movie.attributes} id={movie.id} />;
};

export default UpdateMovie;
