import { typesValoracion } from "../types/types";

const initialState = {
  masValoradas: [],
  menosValoradas: [],
};

export const masValoradasReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesValoracion.MAS_VALORADAS:
      return {
        ...state,
        masValoradas: action.payload,
      };
    default:
      return state;
  }
};

export const menosValoradasReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesValoracion.MENOS_VALORADAS:
      return {
        ...state,
        menosValoradas: action.payload,
      };
    default:
      return state;
  }
};
