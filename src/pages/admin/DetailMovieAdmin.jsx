import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "../../components/Loading";
import { ModalEditMovie } from "../../components/ModalEditMovie";
import { fetchMovies } from "../../redux/actions/moviesAction";
import { fetchDeleteMovie } from "../../redux/actions/deleteMovie";
import Swal from "sweetalert2";

import "../../styles/singleMovie.css";

const DetailMovieAdmin = () => {
  const [show, setShow] = useState(false);
  const { idMovie } = useParams();
  const { dataMovies } = useSelector((store) => store);
  const { statusMovies } = useSelector((status) => status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const modalState = () => {
    setShow(true);
  };

  const filterMovie = dataMovies.movies.find((movie) => movie.id == idMovie);

  if (statusMovies.status === "pending") return <Loading />;

  if (statusMovies.status === "succeded") {
    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  }

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
            <svg
              className="w-5 h-5 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
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
              <button onClick={modalState}>Editar</button>
            </div>
          </div>
        </div>
      )}
      <ModalEditMovie show={show} setShow={setShow} movie={filterMovie} />
    </div>
  );
};

export default DetailMovieAdmin;
