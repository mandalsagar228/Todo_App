import Header from "./Components/Header";
import TodoForm from "./Components/TodoForms";
import GetAllTodos from "./Components/getTodos";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <GetAllTodos />
    </>
  );
}

export default App;
