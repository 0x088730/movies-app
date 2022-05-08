import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";
import { Movies } from "../components/Movies";

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
      <h1 style={{ marginTop: "50px", textAlign: "left" }}>
        Todas las peliculas
      </h1>
      {data.dataMovies.status === "succeded" ? (
        <div className="container-movies">
          {data.dataMovies.movies.map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="">
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
            alt=""
          />
        </div>
      )}

      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
