import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { NoMatch } from "../pages/NoMatch";
import { CreateUser } from "../pages/CreateUser";
import { UpdateUser } from "../pages/UpdateUser";
import { Login } from "../pages/login/Login";
import { DisplayUser } from "../pages/DisplayUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
      {
        path: "/user-list",
        element: <DisplayUser />,
      },
      {
        path: "/user/:id",
        element: <UpdateUser />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
