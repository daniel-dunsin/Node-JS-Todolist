const router = require("express").Router();
const {
  getAllTodos,
  addTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

router.route("/").get(getAllTodos).post(addTodo);
router.route("/:id").get(getSingleTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
