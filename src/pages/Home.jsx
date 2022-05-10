import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";
import { MoviesPublic } from "../components/MoviesPublic";
import { Paginacion } from "../components/Paginacion";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cerrarSesion } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
  const TOTALPERPAGE = 15;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const logout = () => {
    cerrarSesion();
    navigate("/login");
  };

  const loadMovies = () => {
    const movies = data.dataMovies.movies.slice(
      (currentPage - 1) * TOTALPERPAGE,
      currentPage * TOTALPERPAGE
    );
    return movies;
  };

  const getTotalPages = () => {
    let cantidadMovies = data.dataMovies.movies.length;
    return Math.ceil(cantidadMovies / TOTALPERPAGE);
  };

  const moviesPerPage = loadMovies();

  return (
    <div>
      <Header />
      <h1 style={{ marginTop: "50px", textAlign: "left" }}>
        Todas las peliculas
      </h1>
      {data.dataMovies.status === "succeded" ? (
        <>
          <div className="container-movies">
            {moviesPerPage.map((movie) => (
              <MoviesPublic key={movie.id} movie={movie} />
            ))}
          </div>
          <Paginacion
            pagina={currentPage}
            total={getTotalPages()}
            onChange={(pagina) => {
              setCurrentPage(pagina);
            }}
          />
        </>
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
