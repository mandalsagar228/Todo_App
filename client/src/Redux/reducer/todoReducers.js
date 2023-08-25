import * as actionTypes from "../actions/types";
const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    case actionTypes.GET_DATA:
      return action.payload;
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default todoReducers;
