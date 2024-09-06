import { createStore, combineReducers, applyMiddleware } from "redux";
import { studentReducer } from "./studentReducer";
import { materialReducer } from "./materialsReducer";
import { raitingReducer } from "./raitingReducer/raitingReducer";
import { thunk } from "redux-thunk";

const initialState = {
  counter: 100,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "plus") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "minus") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const rootReducers = combineReducers({
  counter: counterReducer,
  students: studentReducer,
  materials: materialReducer,
  r: raitingReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
