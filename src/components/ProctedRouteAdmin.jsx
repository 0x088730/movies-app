import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loading } from "./Loading";

export const ProctedRouteAdmin = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <Loading />;
  if (userState.email !== "dilanespindola29@gmail.com")
    return <Navigate to="/" />;

  return <div>{children}</div>;
};
