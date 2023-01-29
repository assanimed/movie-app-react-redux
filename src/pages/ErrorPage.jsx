import React from "react";

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  //const { statusText, message } = useRouteError();
  return (
    <div
      className="text-center text-3xl mt-[35px]"
      style={{ minHeight: "calc(100vh - 169px)" }}
    >
      Error Page Not Found
    </div>
  );
}

export default ErrorPage;
