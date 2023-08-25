import Todo from "../schema/model.js";

const addTodoData = async (req, res) => {
  try {
    if (!req.body || !req.body.data) {
      throw new Error("Request body is missing");
    }
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(201).json(error.message);
  }
};

const getTodosDataBy = async (req, res) => {
  try {
    const todoData = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todoData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// controller for updating
const toggleTodo_ById = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    if (!todoRef) {
      return res.status(404).json({ message: "Todo not found" });
    }
    const todo = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        Done: !todoRef.Done,
      }
    );
    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export { addTodoData, getTodosDataBy, toggleTodo_ById };
