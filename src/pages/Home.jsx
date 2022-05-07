import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";

const Home = () => {
  const { loading, cerrarSesion } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

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
