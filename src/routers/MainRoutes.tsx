import { useRoutes } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "@/pages/Register";
import MainLayout from "@/pages/layout/MainLayout";
import RpaPage from "@/pages/RpaPage";

const MainRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <MainLayout>
            <Home />
          </MainLayout>
        </PrivateRoute>
      ),
    },
    {
      path: "/rpa/:id",
      element: (
        <PrivateRoute>
          <MainLayout>
            <RpaPage />
          </MainLayout>
        </PrivateRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default MainRoutes;
