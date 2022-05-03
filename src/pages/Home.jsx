import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, userState, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    cerrarSesion();
    navigate("/login");
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>home</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
