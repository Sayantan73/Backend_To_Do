// import the model
const Todo = require("../models/todo");

// define route handler

exports.getTodo = async (req, res) => {
    try {
        // fetch all todo item from database
        const todos = await Todo.find({});

        res.status(200).send({success:true, data:todos, message:"Entire todo data is fetched"})
    }
    catch(err){
        console.error(err);
        res.status(500).send({success:false, error:err.message, message:"Server Error"})
    }
}

exports.getTodoById = async (req, res) => {
    try {
        // export todo items based on ids
        const id = req.params.id ;
        const todo = await Todo.findById({_id: id});

        // data for given id not found
        if (!todo){
            return res.status(404).json({
                success: false,
                message: `No data found with given id: ${id}`
            })
        }
        // data for given id found
        res.status(200).send({
            success: true,
            data: todo,
            message: `todo ${id} data successfully fatched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).send({success:false, error:err.message, message:"Server Error"})
    }
}