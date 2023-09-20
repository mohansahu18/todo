const todo = require("../models/todo")

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body
        const response = await todo.findOneAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )
        // find the updated todo 
        const updateTodo = await todo.findById(id)
        return res.status(201).json({
            success: true,
            data: updateTodo,
            message: `updated successfully`,
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
module.exports = { updateTodo }