// IMPORT the models
const todo = require('../models/todo')

// define route handeller
exports.createTodo = async (req, res) => {

    try {

        // access title and description from request body
        const { title, description } = req.body

        // create a new todo abject and insert into db
        const response = await todo.create({ title, description })

        // send a json response with secure flag
        res.status(200).json({
            success: true,
            data: response,
            message: "success fully created a todo"
        })
    } catch (err) {
        console.error(err)
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message
        })
    }
}