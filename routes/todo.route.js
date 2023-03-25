const router = require("express").Router();
const {
  getAllTodos,
  addTodo,
  getSingleTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

router.route("/").get(getAllTodos).post(addTodo);
router.route("/:id").get(getSingleTodo).put(updateTodo).delete(deleteTodo);
router.route("/:id/completed").get(completeTodo);

module.exports = router;
