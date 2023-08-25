// post api

import axios from "axios";
import { ADDNEW_TODO, GET_DATA, TOGGLE_TODO } from "./types";
const URL = "https://todoapp-lk6a.onrender.com";
const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling data", error.message);
  }
};

// get api

const getTodosdata = (data) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/todosdata`);
    dispatch({ type: GET_DATA, payload: res.data });
  } catch (error) {
    console.log("Error while  getting data", error.message);
  }
};

// get api for updating

const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/todosdata/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while  getting data", error.message);
  }
};
export { addNewTodo, getTodosdata, toggleTodo };
