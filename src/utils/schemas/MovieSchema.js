import * as Yup from "yup";

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short")
    .required("Title is Required"),
  plot: Yup.string().test({
    message: ({ passed }) =>
      passed ? "good" : "Please make sure to have at least 15 words",
    test: (value) => {
      if (value) return value.split(" ").length >= 15;
      return false;
    },
  }),
  director: Yup.string().required("Director is Required"),
  genre: Yup.string().required("genre is Required"),
  poster: Yup.mixed().required("Poster is Required"),
  duration: Yup.string().test({
    message: ({ passed }) =>
      passed
        ? "value is OK"
        : "Duration must be greator than 0 and less than 300 (5H) max",
    test: (value) => {
      return value > 0 && value < 300;
    },
  }),
  rating: Yup.number().test({
    message: ({ passed }) => (passed ? "good" : "Rate the film on 10"),
    test: (value) => value >= 1 && value <= 10,
  }),
  country: Yup.string().required("Country is Required"),
  releaseDate: Yup.date().test({
    message: ({ passed }) =>
      passed ? "valid" : "Date must range from 1700 and Now",
    test: (value) => {
      const year = new Date(value).getFullYear();
      const today = new Date().getFullYear();
      return year >= 1700 && year <= today;
    },
  }),
  featuredScene: Yup.mixed().required("featured Scene is Required"),
});

export default MovieSchema;
