import axios from "axios";

export const getMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=bc2c220b4c8c46f13d243867890a3e7c";

  const res = await axios.get(url);
  const data = res.data;
  return data.results;
};

export default getMovies;
