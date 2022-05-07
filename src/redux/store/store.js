import { createStore, applyMiddleware, combineReducers } from "redux";
import { moviesReducer } from "../reducers/moviesReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({ dataMovies: moviesReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
