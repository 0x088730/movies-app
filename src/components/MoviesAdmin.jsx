import { useNavigate } from "react-router-dom";

export const MoviesAdmin = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div key={movie.id} className="container-movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        onClick={() => navigate(`/admin/movie/${movie.id}`)}
      />
      <div className="vote">
        <i className="fa-solid fa-star"></i>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
};
