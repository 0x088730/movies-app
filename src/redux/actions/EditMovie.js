import {
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { fetchMovies } from "./moviesAction";
import { typesStates } from "../types/types";

export const editMoviePending = () => {
  return {
    type: typesStates.PENDING,
  };
};

export const editMovieSuccess = () => {
  return {
    type: typesStates.SUCCEDED,
  };
};

export const editMovieRejected = () => {
  return {
    type: typesStates.ERROR,
  };
};

export const fetchEditMovie = (movie) => {
  return async (dispatch) => {
    dispatch(editMoviePending());
    try {
      const q = query(collection(db, "peliculas"), where("id", "==", movie.id));
      const snapshot = await getDocs(q);
      let id;
      snapshot.docs.map((doc) => (id = doc.id));
      const docRef = doc(db, "peliculas", id);
      await updateDoc(docRef, movie).then(() => dispatch(editMovieSuccess()));
      dispatch(fetchMovies());
    } catch (error) {
      console.log(error);
      dispatch(editMovieRejected());
    }
  };
};
