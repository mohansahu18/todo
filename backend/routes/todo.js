const express = require('express')
const routes = express.Router()

// import controller
const { createTodo } = require('../controllers/createTodo')
const getAllTodo = require('../controllers/getAllTodo')
const { deleteTodo } = require('../controllers/deleteTodo')
const { updateTodo } = require("../controllers/updateTodo")

// define api routes
routes.post("/createTodo", createTodo)
routes.get('/getAllTodo', getAllTodo)
routes.delete("/deleteTodo/:id", deleteTodo)
routes.put("/editTodo/:id", updateTodo)

module.exports = routes