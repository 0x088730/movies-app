import Carousel from "framer-motion-carousel";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import "../styles/carrousel.css";

export const Carrousel = () => {
  const { dataMovies } = useSelector((store) => store);

  const moviesSlice = dataMovies.movies.slice(0, 3);

  return (
    <div className="container-carrousel">
      <Carousel interval={5000}>
        {dataMovies.movies.length === 0 ? (
          <Loading />
        ) : (
          moviesSlice.map((movie, i) => (
            <div key={i} className="container-carrousel-img">
              <div className="buttons">
                <button>ver ahora</button>
                <button>ver después</button>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};
