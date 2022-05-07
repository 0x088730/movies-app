import { types, typesStatus } from "../types/types";
import { collection, getDocs } from "firebase/firestore";
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
      const querySnapshot = await getDocs(collection(db, "movies"));
      const movies = querySnapshot.docs.map((doc) => doc.data());
      dispatch(movieSuccess(movies));
    } catch (error) {
      dispatch(movieError(error));
    }
  };
};
