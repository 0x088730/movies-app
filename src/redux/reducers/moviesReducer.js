import { types, typesStatus, typesStates } from "../types/types";

const initial = {
  status: "idle",
  movies: [],
};

export const moviesReducer = (state = initial, action) => {
  switch (action.type) {
    case typesStatus.pending:
      return {
        ...state,
        status: typesStatus.pending,
      };
    case types.getmovies:
      return {
        ...state,
        status: typesStatus.succeded,
        movies: action.payload,
      };
    case typesStatus.error:
      return {
        ...state,
        status: typesStatus.error,
      };
    default:
      return state;
  }
};
