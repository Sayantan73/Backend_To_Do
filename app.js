const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;


//middleware to parse json request body
app.use(express.json());

// important routes for todo API
const todoRoutes = require("./routes/todos")

// mount the todo api routes
app.use("/api/v1", todoRoutes)


app.listen(PORT, () => {
    console.log(`app listening on port number: ${PORT}`);
})
 
const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res)=>{
    res.send(`<h1>This is the Homepage of this Website</h1>`);
})
