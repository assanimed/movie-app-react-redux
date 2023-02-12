import { useEffect } from "react";

import Header from "../Components/Header/Header";
import LoginForm from "../Components/forms/LoginForm";
import styled, { keyframes } from "styled-components";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LoginWrapper = styled.div`
  max-width: 500px;
  min-width: 300px;
  padding: 10px;
  flex-grow: 1;
`;

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

function Login() {
  const { authError, isAuth } = useSelector((state) => state.Auth);
  const prevRoute = useSelector((state) => state.RoutesControl.prevRoute);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate(prevRoute ?? "/dashboard");
  }, [isAuth]);
  return (
    <div className="dark:bg-[#1B2430] min-h-[100vh] dark:text-white">
      <Header />
      <main className="py-3 flex justify-center">
        <LoginWrapper>
          <h1 className="text-2xl mb-5"> Admin Login </h1>
          <LoginForm />
          {authError && (
            <ErroWrapper className=" text-red-700 dark:text-[#E5E5CB]">
              {authError}
            </ErroWrapper>
          )}
        </LoginWrapper>
      </main>
    </div>
  );
}

export default Login;
