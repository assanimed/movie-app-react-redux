import React from "react";
import { Formik } from "formik";
import useAuth from "../../utils/hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
  const inputStyle = `border-2 p-2 dark:text-black rounded focus:outline-none focus:border-transparent focus:ring focus:ring-[#a7f0e6] dark:focus:ring-[#6D67E4]`;

  return (
    <div>
      <Formik
        initialValues={{ login: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.login) {
            errors.login = "Required";
          }
          if (!values.password) errors.password = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            await login(values.login, values.password);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex gap-5 grow"
            style={{ flexDirection: "column" }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="login">Login</label>
              <input
                type="text"
                name="login"
                id="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
                className={inputStyle}
              />
              <span className="text-sm text-[#d7753a]">
                {errors.login && touched.login && errors.login}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={inputStyle}
              />
              <span className="text-sm text-[#d7753a]">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#6170a3] py-3 my-3 rounded-md text-white text-xl focus:outline-none focus:border-transparent focus:ring focus:ring-[#89a7ce]"
            >
              {isSubmitting ? "Login..." : "Login"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
