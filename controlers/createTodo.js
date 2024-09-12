// import the model
const todo = require("../models/todo");

// define route handler

exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;

        // create a new todo object and insert in db
        const response = await todo.create({ title, description })

        // send a json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created successfully"
            }
        );
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: err.message
            }
        );
    }
}