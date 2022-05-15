import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMasValoradas } from "../redux/actions/masValoradasAction";
import { fetchMovies } from "../redux/actions/moviesAction";
import { Header } from "../components/Header";
import { MoviesPublic } from "../components/MoviesPublic";
import MovieSearched from "../components/MovieSearched";
import { useSearchMovie } from "../hooks/useSearchMovie";

const MasValoradas = () => {
  const { movieSearch, search } = useSearchMovie();
  const dispatch = useDispatch();
  const { peliculasMasValoradas, statusMovies } = useSelector((store) => store);
  const { masValoradas } = peliculasMasValoradas;

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMasValoradas());
  }, [dispatch]);

  return (
    <div className="px-10 py-5">
      <Header />
      <h1 className="mt-5 text-left text-lg">Mas Valoradas</h1>
      <div className="container-movies">
        {statusMovies.status === "pending" ? (
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
              alt=""
            />
          </div>
        ) : search === "" ? (
          masValoradas.map((movies) => (
            <MoviesPublic key={movies.id} movie={movies} />
          ))
        ) : (
          <MovieSearched movieSearch={movieSearch} />
        )}
      </div>
    </div>
  );
};

export default MasValoradas;
