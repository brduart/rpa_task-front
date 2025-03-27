import { useAuthStore } from "@/store/userAuthStore";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
