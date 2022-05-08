import { types, typesStates } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export const addMoviePending = () => {
  return {
    type: typesStates.PENDING,
  };
};

export const addMovieSucced = () => {
  return {
    type: typesStates.SUCCEDED,
  };
};

export const addMovieRejected = () => {
  return {
    type: typesStates.ERROR,
  };
};

export const fetchAddMovie = (movie) => {
  return async (dispatch) => {
    dispatch(addMoviePending());
    try {
      await addDoc(collection(db, "movies"), movie);
      dispatch(addMovieSucced());
    } catch (error) {
      dispatch(addMovieRejected());
    }
  };
};
