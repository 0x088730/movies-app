import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesAction";
import { useSearchContext } from "../context/SearchContext";

export const useSearchMovie = () => {
  const { search } = useSearchContext();
  const dispatch = useDispatch();
  const { dataMovies } = useSelector((store) => store);
  const { movies } = dataMovies;

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const getMovie = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
  );

  return { movieSearch: getMovie, search };
};
