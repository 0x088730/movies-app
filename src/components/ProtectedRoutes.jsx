import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { userState, loading } = useAuth();

  if (loading) return <h1>loading...</h1>;

  if (!userState) return <Navigate to={"/login"} />;

  return <div>{children}</div>;
};
