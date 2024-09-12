const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controlers/createTodo");
const {getTodo, getTodoById} = require("../controlers/getTodo");
const {updateTodo} = require("../controlers/updateTodo");
const {deleteTodo} = require("../controlers/deleteTodo");

// define api routes
router.post("/createTodo", createTodo);
router.get("/gettodos", getTodo);
router.get("/gettodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
 
module.exports = router;