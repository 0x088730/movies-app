import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { fetchMovies } from "../../redux/actions/moviesAction";
import "../../styles/movies.css";

const AdminMovies = () => {
  const data = useSelector((movies) => movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div>
      <NavBarAdmin />
      <h1>Peliculas</h1>
      {data.dataMovies.status === "succeded" ? (
        <div className="container-movies">
          {data.dataMovies.movies.map((movie) => (
            <div key={movie.id} className="container-movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
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
    </div>
  );
};

export default AdminMovies;
