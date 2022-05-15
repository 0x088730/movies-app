import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";
import { MoviesPublic } from "../components/MoviesPublic";
import { Paginacion } from "../components/Paginacion";
import { Logout } from "../components/Logout";

import { useSearchMovie } from "../hooks/useSearchMovie";
import MovieSearched from "../components/MovieSearched";

const Home = () => {
  const { movieSearch, search } = useSearchMovie();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((store) => store);
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
    <div className="px-10 py-5">
      <Header />
      <h1 className="mt-5 text-left text-lg">Todas las peliculas</h1>
      {data.dataMovies.status === "succeded" ? (
        search === "" ? (
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
          <MovieSearched movieSearch={movieSearch} />
        )
      ) : (
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
            alt=""
          />
        </div>
      )}
      <Logout />
    </div>
  );
};

export default Home;
