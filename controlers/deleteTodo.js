// import the model
const Todo = require("../models/todo");

// define route handler

exports.deleteTodo = async (req, res) => {
    try {
        // update todo items based on ids
        const {id} = req.params ;
        const todo = await Todo.findByIdAndDelete(id);

        // data for given id not found
        if (!todo){
            return res.status(404).send({success: false, message: `No data found with given id: ${id}`})
        }
        // data for given id found and updated successfully
        res.status(200).send({success: true, message: `deleted successfully`})
    }
    catch(err){
        console.error(err);
        res.status(500).send({success:false, error:err.message, message:"Server Error"})
    }
}