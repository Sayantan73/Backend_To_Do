const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then( ()=>{console.log("db connection successful")})
    .catch( (e)=>{
        console.log("Issue in db connection");
        console.error(e.message);
        process.exit(1);
    })
}

module.exports = dbConnect;