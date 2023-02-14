import { Formik } from "formik";
import * as Yup from "yup";

import { default as Input } from "../ui/UserFormInput";

import { useNavigate } from "react-router";

import { useAddNewUserMutation } from "../../features/user/usersApiSlice";

const userSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username is too short")
    .required("Username is Require"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
  password: Yup.string()
    .required("No Password Provided.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Must contain 8 chars, at least 1 UpperCase, 1 LowerCase and 1 Number"
    ),
  rePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password don't match."
  ),
});

const NewUserForm = () => {
  const [addUser, { isLoading, isError, error }] = useAddNewUserMutation();

  if (isError) console.log(error?.status);

  const navigate = useNavigate();
  const hanldeCancel = () => {
    navigate("/dashboard/users");
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        rePassword: "",
      }}
      validationSchema={userSchema}
      onSubmit={async (values) => {
        const res = await addUser(values);
        if (res?.data) {
          navigate("/dashboard/users");
        }
      }}
    >
      {({ values, handleChange, handleSubmit, errors, isValid }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className="p-2 mt-5 max-w-xs mx-auto flex flex-col gap-5"
          >
            <Input
              label="Username"
              type="text"
              name="username"
              value={values.username}
              handleChange={handleChange}
              errorMessage={errors.username}
            />
            <Input
              label="Email"
              type="text"
              name="email"
              value={values.email}
              handleChange={handleChange}
              errorMessage={errors.email}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              errorMessage={errors.password}
            />
            <Input
              label="Repeat Password"
              type="password"
              name="rePassword"
              value={values.rePassword}
              handleChange={handleChange}
              errorMessage={errors.rePassword}
            />
            <div className="flex gap-3 justify-center ">
              <input
                type="button"
                value="cancel"
                onClick={hanldeCancel}
                className="cursor-pointer text-white bg-indigo-900 dark:bg-indigo-700 px-6 py-2 rounded hover:bg-sky-800"
              />
              <input
                type="submit"
                value={isLoading ? "Add..." : "Add"}
                disabled={!isValid}
                className="cursor-pointer text-white bg-indigo-500  px-10 py-2 rounded hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-sky-300"
              />
            </div>
            {isError && (
              <div className="text-sm text-center text-red-600 border-2 border-red-600 py-2 ">
                {error?.status === 400
                  ? "User Already Exists, try with different username and email"
                  : "Internal Server Error"}
              </div>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default NewUserForm;
