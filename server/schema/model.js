import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  Done: {
    type: Boolean,
    default: false,
  },
  creadtedAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
