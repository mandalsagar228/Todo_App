import { useState } from "react";
import { addNewTodo } from "../Redux/actions/index.js";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmitFrom = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form action="" className="formClass" onSubmit={onSubmitFrom}>
      <input
        type="text"
        placeholder="Type Your Todos here..."
        className="input"
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
};
export default TodoForm;
