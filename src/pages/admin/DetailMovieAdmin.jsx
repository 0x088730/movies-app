import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/actions/moviesAction";
import { Loading } from "../../components/Loading";

import "../../styles/singleMovie.css";

const DetailMovieAdmin = () => {
  const { idMovie } = useParams();
  const { dataMovies } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const filterMovie = dataMovies.movies.find((movie) => movie.id == idMovie);

  return (
    <div>
      {!filterMovie ? (
        <Loading />
      ) : (
        <div className="single-movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${filterMovie.poster_path}`}
            alt=""
            style={{}}
          />
          <div className="vote">
            <i className="fa-solid fa-star"></i>
            <p>{filterMovie.vote_average}</p>
          </div>
          <div className="desc-movie">
            <h1>{filterMovie.original_title}</h1>
            <p>{filterMovie.overview}</p>
            <div className="release-genre">
              <p>{filterMovie.release_date.slice(0, 4)}</p>
              <span></span>
              <p>{filterMovie.genre}</p>
            </div>
            <div className="buttons">
              <button>Ver ahora</button>
              <button>Ver despues</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMovieAdmin;
