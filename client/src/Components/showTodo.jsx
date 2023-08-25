import { toggleTodo } from "../Redux/actions";
import { useDispatch } from "react-redux";

const ShowTodo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li 
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo?.done ? "line-through" : "",
        textDecorationThickness: todo?.done ? "4px" : "",
      }}
    >
      <span className="data">{todo.data}</span>
      <span className="icon">
        <i className="fas fa-trash"></i>
      </span>
      <span className="icon">
        <i className="fas fa-pen"></i>
      </span>
    </li>
  );
};
export default ShowTodo;
