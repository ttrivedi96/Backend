const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/userdata";

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"


const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Mongo Connected");
    })
}


module.exports = connectToMongo;