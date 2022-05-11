import { types, typesStatus } from "../types/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

export const moviePending = () => {
  return {
    type: typesStatus.pending,
  };
};

export const movieSuccess = (movies) => {
  return {
    type: types.getmovies,
    payload: movies,
  };
};

export const movieError = (error) => {
  return {
    type: typesStatus.error,
    payload: error,
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(moviePending());
    try {
      const q = query(
        collection(db, "peliculas"),
        orderBy("created_at", "asc")
      );
      const snapshot = await getDocs(q);
      const moviess = snapshot.docs.map((doc) => doc.data());
      dispatch(movieSuccess(moviess));
    } catch (error) {
      dispatch(movieError(error));
    }
  };
};
