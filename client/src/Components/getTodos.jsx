import { useEffect } from "react";
import { getTodosdata } from "../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import ShowTodo from "./showTodo";

const GetAllTodos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosdata());
  }, [dispatch]);
  const todos = useSelector((state) => state.todos);
  return (
    <article>
      <ul>
        {todos.map((todo) => (
          <ShowTodo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default GetAllTodos;
