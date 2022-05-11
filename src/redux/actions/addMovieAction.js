import { typesStates } from "../types/types";
import firebase from "firebase/app";
import {
  addDoc,
  collection,
  FieldValue,
  serverTimestamp,
} from "firebase/firestore";
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

export const fetchAddMovie = ({ ...movie }) => {
  return async (dispatch) => {
    dispatch(addMoviePending());
    try {
      movie = { ...movie, created_at: serverTimestamp() };
      await addDoc(collection(db, "peliculas"), movie);
      dispatch(addMovieSucced());
    } catch (error) {
      dispatch(addMovieRejected());
    }
  };
};
