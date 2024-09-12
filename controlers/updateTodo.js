// import the model
const Todo = require("../models/todo");

// define route handler

exports.updateTodo = async (req, res) => {
    try {
        // update todo items based on ids
        const {id} = req.params ;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate({_id: id},{ title, description, updatedAt: Date.now()});

        // data for given id not found
        if (!todo){
            return res.status(404).json({
                success: false,
                message: `No data found with given id: ${id}`
            })
        }
        // data for given id found and updated successfully
        res.status(200).send({
            success: true,
            data: todo,
            message: `updatted successfully`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).send({success:false, error:err.message, message:"Server Error"})
    }
}