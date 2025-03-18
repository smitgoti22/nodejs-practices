const mongoose = require('mongoose');

function connectionMongoDB(url){
    return mongoose.connect(url).then((req, res) => {
        console.log("MongoDB Connected successfully");
    }).catch((err) => {
        console.log("MongoDb Error ===>> ", err);
    });
}

module.exports = {
    connectionMongoDB,
}