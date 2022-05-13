import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";
import { Loading } from "../components/Loading";
import { Trailer } from "../components/Trailer";

import "../styles/singleMovie.css";

const DetailMovie = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { idMovie } = useParams();
  const { dataMovies } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filterMovie = dataMovies.movies.find((movie) => movie.id == idMovie);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  return (
    <div>
      {!filterMovie ? (
        <Loading />
      ) : (
        <>
          <div className="single-movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${filterMovie.poster_path}`}
              alt=""
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
                <button onClick={handleShowVideo}>Ver ahora</button>
                <button>Ver despues</button>
              </div>
            </div>
          </div>
          {showVideo && (
            <Trailer
              id={filterMovie.id}
              showVideo={showVideo}
              setShowVideo={setShowVideo}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DetailMovie;
