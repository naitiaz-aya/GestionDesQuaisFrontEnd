import { useRoutes } from "react-router-dom";
import { HomePage, LoginPage, NotFoundPage,RegisterPage, UnauthorizedPage } from "../pages";
import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import { Navigation } from "../components";
const Routers = () => useRoutes([
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "register",
    element: <RegisterPage/>
  },
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ],
  },
  {
    path: "*",
    element:(<><Navigation/> <NotFoundPage/></>)
  },
  {
    path: "unauthorized",
    element:(<><Navigation/> <UnauthorizedPage/></>)
  },
])
export default Routers