import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Spinner from "../components/ui/Spinner";
import UserLogs from "../pages/UserLogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "logs",
        loader: () => fetch("https://orkid-employe-server.vercel.app/employee"),
        hydrateFallbackElement: <Spinner />,
        Component: UserLogs,
      },
      {
        path: "auth/signup",
        Component: SignUp,
      },
      {
        path: "auth/login",
        Component: Login,
      },
    ],
  },
]);
