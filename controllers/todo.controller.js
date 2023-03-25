const asyncHandler = require("../utils/async.handler");

const addTodo = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

const getAllTodos = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

const getSingleTodo = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

const completeTodo = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

const updateTodo = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

const deleteTodo = asyncHandler(async (req, res, next) => {
    console.log("route exist")
});

module.exports = {
  addTodo,
  getAllTodos,
  getSingleTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
};
