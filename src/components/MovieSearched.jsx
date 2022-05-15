import { MoviesPublic } from "./MoviesPublic";
import "../styles/moviesSearch.css";

const MovieSearched = ({ movieSearch }) => {
  return (
    <div className="movies-search">
      {movieSearch.map((movie) => (
        <MoviesPublic key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieSearched;
