import express, { Router } from "express";
import {
  addTodoData,
  getTodosDataBy,
  toggleTodo_ById,
} from "../controller/user_controller.js";
const router = express.Router();

router.post("/todos", addTodoData);
router.get("/todosdata", getTodosDataBy);
router.get("/todosdata/:id", toggleTodo_ById);
export default router;
