import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { fetchMovies } from "../../redux/actions/moviesAction";
import { MoviesAdmin } from "../../components/MoviesAdmin";
import { Paginacion } from "../../components/Paginacion";

import "../../styles/movies.css";

const AdminMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector((movies) => movies);
  const dispatch = useDispatch();
  const TOTALPERPAGE = 15;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
    <div className="admin-movies-view">
      <NavBarAdmin />
      <h1>Peliculas</h1>
      {data.dataMovies.status === "succeded" ? (
        <>
          <div className="container-movies">
            {moviesPerPage.map((movie) => (
              <MoviesAdmin key={movie.id} movie={movie} />
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
    </div>
  );
};

export default AdminMovies;
