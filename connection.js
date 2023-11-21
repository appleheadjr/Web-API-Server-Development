const mongoose = require("mongoose");


//connecting mongoose
async function connectMongoDb(url){
    
    return mongoose.connect(url);  //copied the url got from mongosh command in cmd promt
    
}

module.exports = {

    connectMongoDb,
};