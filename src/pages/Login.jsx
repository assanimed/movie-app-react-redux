import { useEffect } from "react";

import Header from "../Components/Header/Header";
import LoginForm from "../Components/forms/LoginForm";
import styled, { keyframes } from "styled-components";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAutoLogin from "../utils/hooks/useAutoLogin";

const LoginWrapper = styled.div`
  max-width: 500px;
  min-width: 300px;
  padding: 10px;
  flex-grow: 1;
`;

function Login() {
  useAutoLogin();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const prevRoute = useSelector((state) => state.RoutesControl.prevRoute);

  const navigate = useNavigate();

  useEffect(() => {
    // Not Yet Fully Implement JWT refresh Token to Keep the use Authenticated
    navigate("/");

    if (isAuth) navigate(prevRoute ?? "/dashboard");
  }, [isAuth]);
  return (
    <div className="dark:bg-[#1B2430] min-h-[100vh] dark:text-white">
      <Header />
      <main className="py-3 flex justify-center">
        <LoginWrapper>
          <h1 className="text-2xl mb-5"> Admin Login </h1>
          <LoginForm />
        </LoginWrapper>
      </main>
    </div>
  );
}

export default Login;
