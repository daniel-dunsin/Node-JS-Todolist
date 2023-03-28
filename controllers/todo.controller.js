const asyncHandler = require("../utils/async.handler");
const Todo = require("../models/todo.model");
const { CustomError } = require("../utils/errors");

const addTodo = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(new CustomError("Provide Todo name", 400));
  }
  const todo = new Todo({
    owner: req.user.user_id,
    name,
  });
  await todo.save();
  res.status(201).send({ msg: "created!!" });
});

const getAllTodos = asyncHandler(async (req, res, next) => {
  const { user_id } = req.user;
  const { completed } = req.query;
  const queryObj = { owner: user_id };
  if (completed) {
    queryObj.completed = completed === "true" ? true : false;
  }

  const todos = await Todo.find(queryObj);

  res.status(200).send({ todos: todos });
});

const getSingleTodo = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ owner: req.user.user_id, _id: id });

  if (!todo) {
    return next(new CustomError("Doesn't exist", 404));
  }

  res.status(200).send({ todo });
});

const updateTodo = asyncHandler(async (req, res, next) => {
  console.log("route exist");
});

const deleteTodo = asyncHandler(async (req, res, next) => {
  console.log("route exist");
});

module.exports = {
  addTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
  deleteTodo,
};
