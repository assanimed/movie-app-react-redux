import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Pages/Main";
import Dashboard from "./Protected/Dashboard";
import ErrorPage from "./Pages/ErrorPage";
import HomePreview from "./Pages/HomePreview";
import TitlePreview, { loader as TitleLoader } from "./Pages/TitlePreview";
import Login from "./Pages/Login";
import Movies from "./Protected/Movies/Movies";
import Users from "./Protected/Users/Users";
import Logout from "./Pages/Logout";
import AdminWelcome from "./Protected/AdminWelcome";
import AddNewMovie from "./Protected/Movies/AddNewMovie";
import MovieLayout from "./Protected/Movies/MovieLayout";
import UpdateMovie from "./Protected/Movies/UpdateMovie";
import UsersLayout from "./Protected/Users/UsersLayout";
import NewUser from "./Protected/Users/NewUser";
import Top from "./Pages/Top";
import New from "./Pages/New";
import All from "./Pages/All";

// routing

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePreview />,
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
