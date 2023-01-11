import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// ROUTING RELATED

import MainPreview from "./Components/Preview/MainPreview";
import Main from "./Components/Pages/Main";
import Dashboard from "./Components/Protected/Dashboard";
import ErrorPage from "./Components/Pages/ErrorPage";
import HomePreview from "./Components/Pages/HomePreview";
import NewRelease from "./Components/Pages/NewRelease";
import Trending from "./Components/Pages/Trending";

// routing

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePreview />,
      },
      {
        path: "/:page",
        element: <MainPreview />,
      },
      {
        path: "/notFound",
        element: <ErrorPage />,
      },
      {
        path: "/new",
        element: <NewRelease />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
