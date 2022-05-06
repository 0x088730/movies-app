import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "./Loading";

export const ProtectedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <Loading />;

  if (!userState) return <Navigate to={"/login"} />;

  return <div>{children}</div>;
};
