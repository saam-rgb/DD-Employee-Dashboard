import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { NoMatch } from "../pages/NoMatch";
import { CreateUser } from "../pages/CreateUser";
import { UpdateUser } from "../pages/UpdateUser";

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
        path: "update-user",
        element: <UpdateUser />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;
