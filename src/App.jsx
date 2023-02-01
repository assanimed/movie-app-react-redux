import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Main,
  Home,
  All,
  New,
  Top,
  TitlePreview,
  Login,
  Logout,
  ErrorPage,
} from "./Pages";
import { loader as TitleLoader } from "./Pages/TitlePreview";

import {
  Dashboard,
  AdminWelcome,
  MovieLayout,
  Movies,
  AddNewMovie,
  UpdateMovie,
  UsersLayout,
  Users,
  NewUser,
} from "./Protected";
import useInitDarkTheme from "./utils/hooks/useInitDarkTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/top",
        element: <Top />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/title/:id",
        element: <TitlePreview />,
        loader: TitleLoader,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <AdminWelcome />,
          },
          {
            path: "movies",
            element: <MovieLayout />,
            children: [
              {
                index: true,
                element: <Movies />,
              },
              {
                path: "new",
                element: <AddNewMovie />,
              },
              {
                path: "update/:id",
                element: <UpdateMovie />,
              },
            ],
          },
          {
            path: "users",
            element: <UsersLayout />,
            children: [
              {
                index: true,
                element: <Users />,
              },
              {
                path: "new",
                element: <NewUser />,
              },
            ],
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  useInitDarkTheme();
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
