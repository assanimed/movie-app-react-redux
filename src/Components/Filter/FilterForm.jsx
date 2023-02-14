import React from "react";

import {
  setPublicMovies,
  setPublicMetaData,
} from "../../features/movie/PublicMoviesSlice";
import { Formik } from "formik";
import UserFormInput from "../ui/UserFormInput";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleStatus,
  setFilterQuery,
} from "../../features/filter/filterSlice";

import getFilteredMovies from "../../api/movies/getFilteredMovies";
import { setFilterMode } from "../../features/movie/PublicMoviesSlice";
import filterQueryBuilder from "../../utils/helpers/filterQueryBuilder";

const FilterForm = () => {
  const dispatch = useDispatch();
  const { pageLimit } = useSelector((state) => state.PublicMovies);

  const handleCancel = () => {
    dispatch(toggleStatus());
  };
  return (
    <Formik
      initialValues={{
        keyword: "",
        genre: "",
        startYear: "",
        endYear: "",
        startRating: "",
        endRating: "",
      }}
      validate={(values) => {
        const errors = {};
        if (Object.values(values).every((entry) => entry === ""))
          errors["empty"] = true;
        return errors;
      }}
      onSubmit={async (values) => {
        const filteredEnteries = {};
        for (let entry in values)
          if (values[entry] !== "") filteredEnteries[entry] = values[entry];
        const query = await filterQueryBuilder(filteredEnteries);

        dispatch(setFilterQuery(query));
        dispatch(setFilterMode(true));
        const { data, meta } = await getFilteredMovies(query, 1, pageLimit);
        dispatch(setPublicMovies(data));
        dispatch(setPublicMetaData(meta.pagination));
        dispatch(toggleStatus());
      }}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className=" max-w-lg flex flex-col gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
              <UserFormInput
                label="Keyword"
                type="text"
                value={values.keyword}
                name="keyword"
                handleChange={handleChange}
                extraClasses="flex-grow"
              />
              <UserFormInput
                label="Genre"
                type="text"
                value={values.genre}
                name="genre"
                handleChange={handleChange}
                extraClasses="flex-grow"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
              <UserFormInput
                label="Year From"
                type="number"
                value={values.startYear}
                name="startYear"
                handleChange={handleChange}
                extraClasses="flex-grow"
                extraInputAtrr={{ min: "1800", max: new Date().getFullYear() }}
              />
              <UserFormInput
                label="Year To"
                type="number"
                value={values.endYear}
                name="endYear"
                handleChange={handleChange}
                extraClasses="flex-grow"
                extraInputAtrr={{ min: "1800", max: new Date().getFullYear() }}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
              <UserFormInput
                label="Rating From"
                type="number"
                value={values.startRating}
                name="startRating"
                handleChange={handleChange}
                extraClasses="flex-grow"
                extraInputAtrr={{ min: "1", max: "10" }}
              />
              <UserFormInput
                label="Rating To"
                type="number"
                value={values.endRating}
                name="endRating"
                handleChange={handleChange}
                extraClasses="flex-grow"
                extraInputAtrr={{ min: "1", max: "10" }}
              />
            </div>
            <div className="flex gap-3">
              <input
                onClick={handleCancel}
                type="button"
                value="Close"
                className="cursor-pointer text-white bg-indigo-900 px-6 py-2 rounded hover:bg-sky-800"
              />
              <input
                type="submit"
                value="Filter"
                disabled={errors.empty}
                className="disabled:cursor-not-allowed disabled:bg-stone-300  cursor-pointer text-white bg-indigo-500 px-10 py-2 rounded hover:bg-sky-500"
              />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default FilterForm;
