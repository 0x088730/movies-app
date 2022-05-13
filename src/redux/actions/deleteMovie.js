import { db } from "../../firebase";
import {
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { fetchMovies } from "./moviesAction";
import { typesStates } from "../types/types";

export const deleteMoviePending = () => {
  return {
    type: typesStates.PENDING,
  };
};

export const deleteMovieRejected = () => {
  return {
    type: typesStates.ERROR,
  };
};

export const fetchDeleteMovie = (idMovie) => {
  return async (dispatch) => {
    dispatch(deleteMoviePending());
    try {
      const q = query(collection(db, "peliculas"), where("id", "==", idMovie));
      const snapshot = await getDocs(q);
      let id;
      snapshot.docs.map((doc) => (id = doc.id));
      const docRef = doc(db, "peliculas", id);
      await deleteDoc(docRef);
      dispatch(fetchMovies());
    } catch (error) {
      dispatch(deleteMovieRejected());
    }
  };
};
