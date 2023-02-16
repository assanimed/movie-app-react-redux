import { useState, useEffect } from "react";
import { Formik } from "formik";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

import styled, { keyframes } from "styled-components";

const inputStyle = `border-2 p-2 dark:text-black rounded focus:outline-none focus:border-transparent focus:ring focus:ring-[#a7f0e6] dark:focus:ring-[#6D67E4]`;

const ErrorAnimation = keyframes`
  0% { width : 100%}
  100% {width: 0}
`;

const ErroWrapper = styled.span`
  // color: red;
  display: block;
  text-align: center;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: -30%;
    right: 0;
    width: 100%;
    height: 15%;
    background-color: #c87122;
    animation: ${ErrorAnimation} 5s linear;
    }
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    if (isError) {
      setHasError(error?.data?.error?.message);
      setTimeout(setHasError, 4950, null);
    }
  }, [isError]);

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
        onSubmit={async (values) => {
          const { data } = await login({
            identifier: values.login,
            password: values.password,
          });

          const { user, jwt } = data;
          document.cookie = `ma_at=${jwt};SameSite=Lax;Path=/`;
          document.cookie = `last_in=${new Date()};SameSite=Lax;Path=/`;
          dispatch(setUser({ user }));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
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
              disabled={isLoading}
              className="bg-[#6170a3] py-3 my-3 rounded-md text-white text-xl focus:outline-none focus:border-transparent focus:ring focus:ring-[#89a7ce]"
            >
              {isLoading ? "Login..." : "Login"}
            </button>
            {hasError && (
              <ErroWrapper className=" text-red-700 dark:text-[#E5E5CB]">
                Invalid Login Credentials
              </ErroWrapper>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
