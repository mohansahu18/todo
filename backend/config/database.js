
const mongoose = require("mongoose")
require("dotenv").config()
const DBURL = process.env.DATABASE_URL
console.log("db_url", DBURL);
const dbconnection = () => {
    mongoose.connect(DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("successfull connected to db"))
        .catch((error) => {
            console.log("issue with db connection");
            console.error(error.message);
            console.log(error);
            process.exit(1)
        })
}

module.exports = dbconnection