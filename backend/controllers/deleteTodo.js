const todo = require('../models/todo')

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const response = await todo.findOneAndDelete({
            _id: id
        })
        return res.status(201).json({
            success: true,
            message: ' successfully deleted Todos',
        })
    } catch (err) {
        console.error(err)
        console.log(err);
        return res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}

module.exports = { deleteTodo }