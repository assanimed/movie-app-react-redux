import { useEffect } from "react";
import { Formik } from "formik";

import { useNavigate } from "react-router";
import styled from "styled-components";
import { usePostMovieMutation } from "../../features/movie/movieApiSlice";

import MovieSchema from "../../utils/schemas/MovieSchema";

const ErrMessageWrapper = styled.div`
  background: red;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
`;

const divRowStyle = `flex flex-col items-start gap-2`;
const labelStyle = `px-2`;
const inputStyle = `border-2 dark:bg-transparent rounded  p-2 w-full max-w-[30rem] text-sm focus:outline-none focus:border-indigo-400`;
const errStyle = `text-[red] text-xs px-2`;

function NewMovieForm() {
  const [postMovie, { isLoading, isSuccess, isError, error }] =
    usePostMovieMutation();

  const navigate = useNavigate();
  const handleCancel = () => navigate("/dashboard/movies");

  useEffect(() => {
    if (isSuccess) {
      setTimeout(navigate("/dashboard/movies"), 100);
    }
  }, [isSuccess]);

  return (
    <div className="p-5 mb-[3rem]">
      <Formik
        initialValues={{
          title: "",
          plot: "",
          genre: "",
          director: "",
          duration: "",
          releaseDate: "",
          rating: "",
          country: "",
          poster: null,
          featuredScene: null,
        }}
        validationSchema={MovieSchema}
        onSubmit={async (values, { setSubmitting, ...rest }) => {
          const formData = new FormData();
          const data = {};
          const { title } = values;

          for (let key in values) {
            if (values[key] instanceof File)
              formData.append(`files.${key}`, values[key], `${title} Poster`);
            else data[key] = values[key];
          }

          formData.append("data", JSON.stringify(data));

          await postMovie(formData);
        }}
      >
        {({
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => {
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 max-w-2xl"
            >
              <div className={divRowStyle}>
                <label htmlFor="title" className={labelStyle}>
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.title && (
                  <span className={errStyle}>{errors.title}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="plot" className={labelStyle}>
                  Plot
                </label>

                <textarea
                  name="plot"
                  id="plot"
                  rows="5"
                  value={values.plot}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                ></textarea>
                {errors && errors.plot ? (
                  <span className={errStyle}>{errors.plot}</span>
                ) : (
                  <span className="text-xs text-gray-700">
                    write a plot min 15 words
                  </span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="genre" className={labelStyle}>
                  Genre
                </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={values.genre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.genre && (
                  <span className={errStyle}>{errors.genre}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="director" className={labelStyle}>
                  director
                </label>
                <input
                  type="text"
                  id="director"
                  name="director"
                  value={values.director}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.director && (
                  <span className={errStyle}>{errors.director}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="duration" className={labelStyle}>
                  duration
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  id="duration"
                  name="duration"
                  value={values.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.duration && (
                  <span className={errStyle}>{errors.duration}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="ReleaseDate" className={labelStyle}>
                  Release Date
                </label>
                <input
                  type="date"
                  min="1800-01"
                  id="ReleaseDate"
                  name="releaseDate"
                  value={values.releaseDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.releaseDate && (
                  <span className={errStyle}>{errors.releaseDate}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="Rating" className={labelStyle}>
                  Rating
                </label>
                <input
                  type="number"
                  id="Rating"
                  name="rating"
                  min="0"
                  step="0.1"
                  max="10"
                  value={values.rating}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.rating && (
                  <span className={errStyle}>{errors.rating}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="Country" className={labelStyle}>
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
                {errors && errors.country && (
                  <span className={errStyle}>{errors.country}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="Poster" className={labelStyle}>
                  Poster
                </label>
                <input
                  type="file"
                  id="Poster"
                  name="poster"
                  onChange={(e) =>
                    setFieldValue("poster", e.currentTarget.files[0])
                  }
                  className={inputStyle}
                />
                {values?.poster && (
                  <img
                    src={URL.createObjectURL(values.poster)}
                    style={{ width: "10rem" }}
                  />
                )}
                {errors && errors.poster && (
                  <span className={errStyle}>{errors.poster}</span>
                )}
              </div>
              <div className={divRowStyle}>
                <label htmlFor="featuredScene">Featured Scene</label>
                <input
                  type="file"
                  id="featuredScene"
                  name="featuredScene"
                  onChange={(e) =>
                    setFieldValue("featuredScene", e.currentTarget.files[0])
                  }
                  className={inputStyle}
                />
                {values?.featuredScene && (
                  <img
                    src={URL.createObjectURL(values.featuredScene)}
                    style={{ width: "10rem" }}
                  />
                )}
                {errors && errors.featuredScene && (
                  <span className={errStyle}>{errors.featuredScene}</span>
                )}
              </div>
              <div className="mt-8 flex gap-10">
                <input
                  type="button"
                  value="Cancel"
                  onClick={handleCancel}
                  className="py-3 px-10 text-white rounded cursor-pointer bg-indigo-900"
                  disabled={isLoading}
                />
                <input
                  type="submit"
                  value={isLoading ? "Loading..." : "Add"}
                  name="Add"
                  className="py-3 px-10 text-white rounded cursor-pointer duration-100 bg-indigo-500 hover:bg-indigo-700"
                />
              </div>
              {isError && (
                <ErrMessageWrapper>
                  {/* {submitError.message} */}
                  Failed to add the Movie!
                </ErrMessageWrapper>
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default NewMovieForm;
