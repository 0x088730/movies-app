import { createStore, applyMiddleware, combineReducers } from "redux";
import { moviesReducer } from "../reducers/moviesReducer";
import { masValoradasReducer } from "../reducers/valoracionReducer";
import { menosValoradasReducer } from "../reducers/valoracionReducer";
import { status } from "../reducers/statusReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  dataMovies: moviesReducer,
  statusMovies: status,
  peliculasMasValoradas: masValoradasReducer,
  peliculasMenosValoradas: menosValoradasReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
