import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { fetchMovies } from "../../redux/actions/moviesAction";
import { Movies } from "../../components/Movies";

import "../../styles/movies.css";

const AdminMovies = () => {
  const data = useSelector((movies) => movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="admin-movies-view">
      <NavBarAdmin />
      <h1>Peliculas</h1>
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
    </div>
  );
};

export default AdminMovies;
