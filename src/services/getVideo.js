import axios from "axios";

export const getVideo = async (idMovie) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=bc2c220b4c8c46f13d243867890a3e7c`
  );
  const data = await res.data;
  const value = data.results.find((video, index) => index === 0);
  return value;
};
