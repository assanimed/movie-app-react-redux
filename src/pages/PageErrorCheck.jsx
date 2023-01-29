import React from "react";

import { useRouteError } from "react-router";

function PageErrorCheck() {
  const erro = useRouteError();

  return <div>PageErrorCheck</div>;
}

export default PageErrorCheck;
