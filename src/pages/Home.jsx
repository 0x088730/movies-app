import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import getMovies from "../services/getMovies";

const Home = () => {
  const { loading, cerrarSesion } = useAuth();
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then((data) => data);
  });

  const logout = () => {
    cerrarSesion();
    navigate("/login");
  };

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
