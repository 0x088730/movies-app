import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenosValoradas } from "../redux/actions/menosValoradasAction";
import { fetchMovies } from "../redux/actions/moviesAction";
import { Header } from "../components/Header";
import { MoviesPublic } from "../components/MoviesPublic";
import MovieSearched from "../components/MovieSearched";
import { useSearchMovie } from "../hooks/useSearchMovie";

const MenosValoradas = () => {
  const { movieSearch, search } = useSearchMovie();

  const dispatch = useDispatch();
  const { peliculasMenosValoradas, statusMovies } = useSelector(
    (store) => store
  );
  const { menosValoradas } = peliculasMenosValoradas;

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMenosValoradas());
  }, [dispatch]);

  return (
    <div className="px-10 py-5">
      <Header />
      <h1 className="mt-5 text-left text-lg">Menos Valoradas</h1>
      <div className="container-movies">
        {statusMovies.status === "pending" ? (
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1651813457/sprint-3/Rolling-1s-197px_atxpcp.svg"
              alt=""
            />
          </div>
        ) : search === "" ? (
          menosValoradas.map((movies) => (
            <MoviesPublic key={movies.id} movie={movies} />
          ))
        ) : (
          <MovieSearched movieSearch={movieSearch} />
        )}
      </div>
    </div>
  );
};

export default MenosValoradas;
