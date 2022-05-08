import { createStore, applyMiddleware, combineReducers } from "redux";
import { moviesReducer } from "../reducers/moviesReducer";
import { status } from "../reducers/statusReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  dataMovies: moviesReducer,
  statusMovies: status,
});

export const store = createStore(reducers, applyMiddleware(thunk));
