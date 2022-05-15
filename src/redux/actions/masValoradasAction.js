import { getDocs, collection, where, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { typesStates, typesValoracion } from "../types/types";

export const masValoradasPending = () => {
  return {
    type: typesStates.PENDING,
  };
};

export const masValoradasSucced = () => {
  return {
    type: typesStates.SUCCEDED,
  };
};

export const masValoradasRejected = () => {
  return {
    type: typesStates.ERROR,
  };
};

export const masValoradas = (movies) => {
  return {
    type: typesValoracion.MAS_VALORADAS,
    payload: movies,
  };
};

export const fetchMasValoradas = () => {
  return async (dispatch) => {
    dispatch(masValoradasPending);
    try {
      const q = query(
        collection(db, "peliculas"),
        where("vote_average", ">=", "7"),
        orderBy("vote_average", "desc")
      );
      const snapshot = await getDocs(q);
      const moviesMasValoradas = snapshot.docs.map((doc) => doc.data());
      dispatch(masValoradas(moviesMasValoradas));
      dispatch(masValoradasSucced());
    } catch (error) {
      dispatch(masValoradasRejected());
    }
  };
};
