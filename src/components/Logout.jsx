import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Logout = ({ children }) => {
  const { cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    cerrarSesion();
    navigate("/login");
  };

  return <button onClick={logout}>{children}</button>;
};
