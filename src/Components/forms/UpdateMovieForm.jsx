import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import styled from "styled-components";
import updateMovie from "../../api/movies/updateMovie";
import { useSelector } from "react-redux";
import { BASEURL } from "../../api/BASEURL";

const ErrMessageWrapper = styled.div`
  background: red;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
`;

const MovieSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title is too short")
    .required("Title is Required"),
});

function UpdateMovieForm({ movie, id }) {
  const divRowStyle = `flex flex-col items-start gap-2`;
  const labelStyle = `px-2`;
  const inputStyle = `border-2 rounded dark:bg-transparent  p-2 w-full max-w-[30rem] text-sm focus:outline-none focus:border-indigo-400`;
  const errStyle = `text-[red] text-xs px-2`;

  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(null);
  const hideErrMessage = () => setSubmitError((prev) => !prev);
  const handleCancel = () => navigate("/dashboard/movies");

  return (
    <div className="p-5 mb-[3rem]">
      <Formik
        initialValues={movie}
        validationSchema={MovieSchema}
        onSubmit={async (values, { setSubmitting, ...rest }) => {
          const formData = new FormData();
          const data = {};
          const { title } = values;
          const skip = ["createdAt", "updatedAt", "publishedAt"];

          for (let key in values) {
            const isFileAttr = ["poster", "featuredScene"].includes(key);
            if (skip.includes(key)) continue;
            if (isFileAttr && values[key] instanceof File)
              formData.append(`files.${key}`, values[key], `${title} ${key}`);
            if (!isFileAttr) data[key] = values[key];
          }

          formData.append("data", JSON.stringify(data));
          try {
            updateMovie(id, formData);
            navigate("/dashboard/movies");
          } catch (e) {
            setSubmitError({ message: e.message });
            setTimeout(() => setSubmitError(null), 3000);
          }
          setSubmitting(false);
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
                {/* <input
                  type="text"
                  id="plot"
                  name="plot"
                  className={inputStyle}
                /> */}
                <textarea
                  name="plot"
                  id="plot"
                  rows="5"
                  value={values.plot}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                ></textarea>
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
              </div>
              <div className={divRowStyle}>
                <label htmlFor="Country" className={labelStyle}>
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={values.country ?? ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputStyle}
                />
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
                {"data" in values?.poster && values?.poster?.data !== null ? (
                  <img
                    src={`${BASEURL}${values.poster.data.attributes.url}`}
                    style={{ width: "15rem" }}
                  />
                ) : (
                  <img
                    src={
                      values.poster instanceof File
                        ? URL.createObjectURL(values.poster)
                        : ""
                    }
                    style={{ width: "15rem" }}
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
                {"data" in values?.featuredScene ? (
                  <img
                    src={`${BASEURL}${values.featuredScene.data.attributes.url}`}
                    style={{ width: "15rem" }}
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(values.featuredScene)}
                    style={{ width: "15rem" }}
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
                  disabled={isSubmitting}
                />
                <input
                  type="submit"
                  value={isSubmitting ? "Loading..." : "Update"}
                  name="Add"
                  className="py-3 px-10 text-white rounded cursor-pointer duration-100 bg-indigo-500 hover:bg-indigo-700"
                />
              </div>
              {submitError && (
                <ErrMessageWrapper onDoubleClick={hideErrMessage}>
                  {" "}
                  {submitError.message}{" "}
                </ErrMessageWrapper>
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UpdateMovieForm;
