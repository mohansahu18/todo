// import the model
const todo = require('../models/todo')

const getAllTodo = async (req, res) => {
    try {
        const response = await todo.find({})
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Todos fetched successfully',
        })
    }
    catch (error) {
        console.error(error)
        console.log(error)
        return res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message,
        })
    }

}
module.exports = getAllTodo