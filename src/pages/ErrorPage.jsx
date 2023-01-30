import React from "react";

import { useRouteError } from "react-router-dom";
import Header from "../Components/Header/Header";
import { TbError404, TbMovieOff } from "react-icons/tb";
import { FcOnlineSupport } from "react-icons/fc";

function ErrorPage() {
  const error = useRouteError();
  // console.log(error);
  return (
    <>
      <Header />
      <div
        className=" dark:bg-[#1B2430] h-full flex flex-col justify-center text-center text-3xl"
        style={{ minHeight: "calc(100vh - 70px)" }}
      >
        {error.status === 404 ? (
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-5 items-center">
              <TbMovieOff className=" text-6xl text-indigo-900 dark:text-indigo-300" />
              <TbError404 className="text-9xl text-indigo-600 dark:text-indigo-300" />
            </div>
            <span className=" text-indigo-800 dark:text-indigo-300">
              Page Not Found
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div>
              <FcOnlineSupport className=" text-4xl" />
            </div>
            <div className="text-5xl text-orange-600">Unknown Error</div>
            <div className="text-sm">We're working to fix the problem!</div>
          </div>
        )}
      </div>
    </>
  );
}

export default ErrorPage;
