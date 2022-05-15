import { getDocs, collection, where, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { typesStates, typesValoracion } from "../types/types";

export const menosValoradasPending = () => {
  return {
    type: typesStates.PENDING,
  };
};

export const menosValoradasSucced = () => {
  return {
    type: typesStates.SUCCEDED,
  };
};

export const menosValoradasRejected = () => {
  return {
    type: typesStates.ERROR,
  };
};

export const menosValoradas = (movies) => {
  return {
    type: typesValoracion.MENOS_VALORADAS,
    payload: movies,
  };
};

export const fetchMenosValoradas = () => {
  return async (dispatch) => {
    dispatch(menosValoradasPending);
    try {
      const q = query(
        collection(db, "peliculas"),
        where("vote_average", "<", "7"),
        orderBy("vote_average", "desc")
      );
      const snapshot = await getDocs(q);
      const moviesMenosValoradas = snapshot.docs.map((doc) => doc.data());
      dispatch(menosValoradas(moviesMenosValoradas));
      dispatch(menosValoradasSucced());
    } catch (error) {
      dispatch(menosValoradasRejected());
    }
  };
};
